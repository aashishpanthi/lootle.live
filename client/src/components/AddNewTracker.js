import PlusIcon from "@mui/icons-material/Add";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-hot-toast";

import SearchIcon from "@mui/icons-material/SearchSharp";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

import { useState } from "react";
import PromptModal from "./PromptModal";
import { useUserData } from "@nhost/react";

const AddNewTracker = ({ className, toast: snackbar }) => {
  const user = useUserData();

  const [allSubmitLoading, setAllSubmitLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [isURLSupported, setIsURLSupported] = useState(false);
  const [details, setDetails] = useState({
    url: "",
    demandPrice: 0,
  });

  const [fetchedPrice, setfetchedPrice] = useState(0);
  const [currency, setcurrency] = useState(null);

  const handleDetails = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //check state
    if (isURLSupported) {
      setAllSubmitLoading(true);

      console.log(details);

      //check the demand price and validate
      if (details.demandPrice < 1) {
        //Notify user about their wrong price input
        toast.error("Please enter the valid amount");
        setAllSubmitLoading(false);
      } else if (details.demandPrice >= fetchedPrice) {
        toast.error("Please enter the amount less than the current price");
        setAllSubmitLoading(false);
      } else {
        try {
          const dataToSave = {
            user: user.email,
            demandPrice: Number(details.demandPrice),
            image: details.image ? details.image : null,
            name: details.name,
            site: details.site,
            type: details.type,
            url: details.url,
          };

          //save the data
          await axios.post(`/api/tracks`, dataToSave);

          toast.success(
            `You will get an email when price of your ${
              details.type
            } drops below ${currency + details.demandPrice}`
          );

          snackbar({
            open: true,
            message: "Added a new tracker",
          }); // open a toast

          handleCloseModal();
        } catch (error) {
          console.log(error.response.request._response);
          setAllSubmitLoading(false);
        }
      }
    } else {
      //show button loading
      setSearchLoading(true);

      try {
        const { data } = await axios.post(`/api/test`, {
          url: details.url,
        });

        const { type, site, name, image, price, currency } = data;

        setfetchedPrice(price);

        console.log(data);

        setDetails({ ...details, site, type, name, image, currency });
        if (currency === "USD") {
          setcurrency("$");
        } else if (currency === "INR") {
          setcurrency("₹");
        } else if (currency === "EUR") {
          setcurrency("€");
        } else if (currency === "NPR") {
          setcurrency("रु");
        } else if (currency === "GBP") {
          setcurrency("£");
        }

        setIsURLSupported(true);
      } catch (error) {
        toast.error(error?.response.data.message);
        console.log(error);
      }

      //turnoff button loading
      setSearchLoading(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsURLSupported(false);
    setDetails({
      url: "",
      demandPrice: 0,
    });
    setSearchLoading(false);
    setAllSubmitLoading(false);
  };

  return (
    <div className={`new-tracker ${className}`}>
      <PromptModal
        title="Track the price"
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      >
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ my: 1 }} fullWidth disabled={isURLSupported}>
            <InputLabel htmlFor="product-url">Link of the product</InputLabel>
            <OutlinedInput
              style={{ flex: 1, minWidth: "300px", marginRight: "10px" }}
              id="product-url"
              name="url"
              value={details.url}
              onChange={handleDetails}
              type="url"
              pattern="https://.*"
              required
              endAdornment={
                <LoadingButton
                  loading={searchLoading}
                  disabled={isURLSupported}
                  startIcon={<SearchIcon />}
                  variant="text"
                  type="submit"
                  size="large"
                ></LoadingButton>
              }
              label="Link of the product"
            />
          </FormControl>

          {isURLSupported && (
            <>
              <Typography
                component="p"
                variant="h6"
                color="Highlight"
                sx={{ mt: 2 }}
              >
                <strong>Current price: </strong>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: details?.currency,
                }).format(fetchedPrice)}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                my={2}
              >
                <FormControl sx={{ mr: 2 }} fullWidth>
                  <InputLabel htmlFor="product-new-price">
                    Price below which you will buy it
                  </InputLabel>
                  <OutlinedInput
                    id="product-new-price"
                    name="demandPrice"
                    type="number"
                    value={details.demandPrice}
                    onChange={handleDetails}
                    startAdornment={
                      <InputAdornment position="start">
                        {currency}
                      </InputAdornment>
                    }
                    label="Amount below which you will buy"
                  />
                </FormControl>
                <LoadingButton
                  loading={allSubmitLoading}
                  startIcon={<ContentPasteSearchIcon />}
                  variant="contained"
                  type="submit"
                  style={{ padding: "15px 30px" }}
                  color="primary"
                >
                  Track
                </LoadingButton>
              </Stack>
            </>
          )}
        </form>
      </PromptModal>

      <Button
        variant="outlined"
        size="large"
        startIcon={<PlusIcon fontSize="inherit" />}
        color="secondary"
        onClick={() => setOpenModal(true)}
      >
        Add new tracker
      </Button>
    </div>
  );
};

export default AddNewTracker;
