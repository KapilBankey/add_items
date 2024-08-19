const ErrorMessage = ({ items }) => {
  return (
    <>
      {" "}
      {items.length === 0 && (
        <h3> I AM STILL HUNGRY , ADD HEALTHY FOOD ITEMS.</h3>
      )}
    </>
  );
};
export default ErrorMessage;
