import { ShimmerPostList, ShimmerTable  } from "react-shimmer-effects";

export const Shimmer = () => {
  return <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={19} gap={30} />;
};

export const AccordianShimmer = ({categories}) => {

  console.log("categories:",categories)
  return (
    <ShimmerTable row={5} col={1}/>
  );
};
