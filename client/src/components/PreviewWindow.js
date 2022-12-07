import { Divider, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import axios from "axios";

function PreviewWindow({ item }) {
  const { name, site, image, url, type, history, demandPrice, informed } = item;

  const [currency, setCurrency] = useState("USD");

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

  const getCurrencyDetails = async () => {
    try {
      const { data } = await axios.get(`/api/sites/${site}`);

      setCurrency(data.currency);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrencyDetails();
  }, []);

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

          {!informed && (
            <Typography component="h6" variant="body1" color="InfoText">
              <strong>Current price: </strong>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currency || "USD",
              }).format(history.pop()?.price)}
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

      <Divider>
        <Typography component="h2" variant="h4">
          History of price
        </Typography>
      </Divider>

      <div style={{ width: "100%", marginTop: "20px" }}>
        <LineChart data={priceHistory} currency={currency} />
      </div>
    </div>
  );
}

export default PreviewWindow;
