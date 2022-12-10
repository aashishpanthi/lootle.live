import {
  CircularProgress,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import axios from "axios";
import { Box } from "@mui/system";

function PreviewWindow({ item: id }) {
  const [item, setItem] = useState(null);

  const [history, setHistory] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [timeRange, setTimeRange] = useState("1_hour");

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);

    let newHistory = history;

    switch (e.target.value) {
      case "1_hour":
        newHistory = history.filter((h) => {
          const date = new Date(h.date);
          const now = new Date();
          const diff = now - date;
          return diff < 3 * 60 * 60 * 1000;
        });
        break;

      case "24_hours":
        newHistory = history.filter((h) => {
          const date = new Date(h.date);
          const now = new Date();
          const diff = now - date;
          return diff < 24 * 60 * 60 * 1000;
        });
        break;

      case "all_time":
        newHistory = history;
        break;
      default:
        newHistory = history;
        break;
    }
    setPriceHistory({
      labels: newHistory.map((h) =>
        new Date(h.date).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      ),
      datasets: [
        {
          label: `Price`,
          data: newHistory?.map((h) => h.price),
          pointBackgroundColor: "royalblue",
          borderColor: "gray",
          pointHoverBackgroundColor: "blue",
        },
      ],
    });
  };

  const [priceHistory, setPriceHistory] = useState({
    labels: history.map((h) =>
      new Date(h.date).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    ),
    datasets: [
      {
        label: `Price`,
        data: history?.map((h) => h.price),
        pointBackgroundColor: "royalblue",
        borderColor: "gray",
        pointHoverBackgroundColor: "blue",
      },
    ],
  });

  const getCurrencyDetails = async (site) => {
    try {
      const { data } = await axios.get(`/api/sites/${site}`);
      setCurrency(data.currency);

      handleTimeRangeChange({ target: { value: "1_hour" } });
    } catch (err) {
      console.log(err);
    }
  };

  const getTrackingDetail = async () => {
    try {
      const { data } = await axios.get(`/api/tracks/${id}`);
      setItem(data);
      setHistory(data.history);

      await getCurrencyDetails(data.site);

      const newHistory = data.history.filter((h) => {
        const date = new Date(h.date);
        const now = new Date();
        const diff = now - date;
        return diff < 60 * 60 * 1000;
      });

      setPriceHistory({
        labels: newHistory.map((h) =>
          new Date(h.date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        ),
        datasets: [
          {
            label: `Price`,
            data: newHistory?.map((h) => h.price),
            pointBackgroundColor: "royalblue",
            borderColor: "gray",
            pointHoverBackgroundColor: "blue",
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrackingDetail();
  }, []);

  if (!item) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const { name, image, demandPrice, site, informed, type, url } = item;

  return (
    <div className="preview-window">
      <Stack direction="row" alignItems="center" flexWrap="wrap" my={2}>
        {type === "product" && (
          <img
            src={image}
            alt={name}
            style={{
              maxWidth: "400px",
              minWidth: "300px",
              maxHeight: "275px",
              objectFit: "contain",
              width: "75%",
              margin: "0 auto",
              display: "block",
              marginRight: "20px",
            }}
          />
        )}

        <div
          style={{
            minWidth: "300px",
            margin: "20px auto",
            marginTop: "20px",
            flex: 1,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            style={{
              fontWeight: "bold",
              textTransform: "capitalize",
              marginBottom: "15px",
              fontSize: "1.5rem",
            }}
          >
            {name}
          </Typography>

          <Typography component="h6" variant="body1" color="InfoText">
            <strong>Your budget : </strong>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: currency || "USD",
            }).format(demandPrice)}
          </Typography>

          {!informed && history.length > 0 && (
            <Typography component="h6" variant="body1" color="InfoText">
              <strong>Current price: </strong>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currency || "USD",
              }).format(history[history.length - 1]?.price)}
            </Typography>
          )}

          <Typography component="h6" variant="body1">
            <strong>Notified: </strong> {informed ? `Yes` : `No`}
          </Typography>

          <Typography component="h6" variant="body1">
            <strong>Site: </strong> {site}
          </Typography>

          <Typography component="p" variant="body2" maxWidth="100%">
            <strong>Link: </strong>{" "}
            <a href={url} target="_blank" style={{ maxWidth: "100%" }}>
              {url.substring(0, 80)}...
            </a>
          </Typography>
        </div>
      </Stack>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          margin: "20px 15px 0 10px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography component="h2" variant="h4">
          History of price
        </Typography>
        <Divider
          sx={{
            flex: 1,
            flexShrink: 1,
            mx: 2,
          }}
        ></Divider>
        <TextField
          id="select-time"
          select
          label="Time"
          value={timeRange}
          onChange={handleTimeRangeChange}
          sx={{
            width: "150px",
          }}
        >
          <MenuItem value="1_hour">Last 1 hour</MenuItem>
          <MenuItem value="24_hours">Last 24 hours</MenuItem>
          <MenuItem value="all_time">Lifetime</MenuItem>
        </TextField>
      </Box>

      <div style={{ width: "100%", marginTop: "20px" }}>
        <LineChart data={priceHistory} currency={currency} />
      </div>
    </div>
  );
}

export default PreviewWindow;
