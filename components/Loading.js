import CircularProgress from "@material-ui/core/CircularProgress";
const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "100vw"
    }}
  >
    <CircularProgress />
  </div>
);
export default Loading;
