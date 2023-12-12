type ActionBarProps = {
  title: string;
  children?: React.ReactElement | React.ReactNode;
};
const Actionbar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          margin: "10px 0",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {children}
      </div>
    </div>
  );
};

export default Actionbar;
