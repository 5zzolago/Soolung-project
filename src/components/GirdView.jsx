import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#c3bdbd",
  width: "230px",
  height: "230px",
  textAlign: "center",
}));

function GridView() {
  return (
    <Grid columns={3} rowSpacing={2} container spacing={12}>
      <Grid xs={1}>
        <Item>1</Item>
        <p>제목</p>
        <p>별점</p>
      </Grid>
      <Grid xs={1}>
        <Item>2</Item>
        <p>제목</p>
        <p>별점</p>
      </Grid>
      <Grid xs={1}>
        <Item>3</Item>
        <p>제목</p>
        <p>별점</p>
      </Grid>
      <Grid xs={1}>
        <Item>4</Item>
        <p>제목</p>
        <p>별점</p>
      </Grid>
      <Grid xs={1}>
        <Item>5</Item>
        <p>제목</p>
        <p>별점</p>
      </Grid>
      <Grid xs={1}>
        <Item>6</Item>
        <p>제목</p>
        <p>별점</p>
      </Grid>
    </Grid>
  );
}

export default GridView;
