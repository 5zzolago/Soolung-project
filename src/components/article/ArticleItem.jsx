import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

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

function GridView() {
  return (
    <div>
      <Grid columns={3} rowSpacing={2} container spacing={12}>
        <Grid xs={1}>
          <Item>1</Item>
          <StyledTitle>박재범과 원소주</StyledTitle>
          <StyledStar>⭐️ 3.5</StyledStar>
        </Grid>
        <Grid xs={1}>
          <Item>2</Item>
          <StyledTitle>제목</StyledTitle>
          <StyledStar>⭐️ 3.5</StyledStar>
        </Grid>
        <Grid xs={1}>
          <Item>3</Item>
          <StyledTitle>제목</StyledTitle>
          <StyledStar>⭐️ 3.5</StyledStar>
        </Grid>
        <Grid xs={1}>
          <Item>4</Item>
          <StyledTitle>제목</StyledTitle>
          <StyledStar>⭐️ 3.5</StyledStar>
        </Grid>
        <Grid xs={1}>
          <Item>5</Item>
          <StyledTitle>제목</StyledTitle>
          <StyledStar>⭐️ 3.5</StyledStar>
        </Grid>
        <Grid xs={1}>
          <Item>6</Item>
          <StyledTitle>제목</StyledTitle>
          <StyledStar>⭐️ 3.5</StyledStar>
        </Grid>
      </Grid>
    </div>
  );
}

export default GridView;
