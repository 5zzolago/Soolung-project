import { Link, useLocation } from "react-router-dom";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { padding } from "@mui/system";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#c3bdbd",
  width: "230px",
  height: "230px",
  textAlign: "center",
  margin: "0",
  padding: "0",
}));

const StyledTitle = styled("div")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "5px",
}));

const StyledStar = styled("div")(({ theme }) => ({
  fontSize: "17px",
  marginTop: "2px",
}));

function GridView({ article, categories }) {
  const location = useLocation();
  const currentLocation = location.pathname.slice(1);

  return (
    <div>
      {categories !== "all" ? (
        <Grid columns={3} rowSpacing={2} container spacing={12}>
          {article
            .filter((art) => art.categories === categories)
            .map((art) => (
              <Grid key={art.id} xs={1}>
                {currentLocation === "article" ? (
                  <Link to={`${art.id}`} state={art}>
                    <Item>{art.id}</Item>
                  </Link>
                ) : (
                  <Link to={`article/${art.id}`} state={art}>
                    <Item>{art.id}</Item>
                  </Link>
                )}
                <StyledTitle>{art.title}</StyledTitle>
                <StyledStar>⭐️ {art.star}</StyledStar>
              </Grid>
            ))}
        </Grid>
      ) : (
        <Grid columns={3} rowSpacing={2} container spacing={12}>
          {article
            .filter((art) => art.categories !== categories)
            .map((art) => (
              <Grid key={art.id} xs={1}>
                {currentLocation === "article" ? (
                  <Link to={`${art.id}`} state={art}>
                    <Item>{art.id}</Item>
                  </Link>
                ) : (
                  <Link to={`article/${art.id}`} state={art}>
                    <Item>{art.id}</Item>
                  </Link>
                )}
                <StyledTitle>{art.title}</StyledTitle>
                <StyledStar>⭐️ {art.star}</StyledStar>
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
}

export default GridView;
