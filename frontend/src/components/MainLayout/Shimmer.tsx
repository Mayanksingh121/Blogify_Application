import {
  ShimmerButton,
  ShimmerCategoryItems,
  ShimmerDiv,
  ShimmerTitle,
} from "shimmer-effects-react";

const Shimmer = () => {
  return (
    <div className="border flex flex-col  h-80 shadow-md rounded-md">
      <div className="h-44">
        <ShimmerDiv mode="light" height={180} width={287} />
      </div>

      <div className="px-2 py-4">
        <ShimmerTitle mode="light" line={2} gap={8} />
      </div>
      <div className="flex justify-between  px-2 pt-4">
        <ShimmerCategoryItems
          hasTitle={false}
          imageHeight={40}
          hasText={false}
          hasButton={false}
          imageWidth={80}
          mode="light"
          imageRounded={50}
        />
        <ShimmerButton size="sm" mode="light" />
      </div>
    </div>
  );
};

export default Shimmer;
