// 大标题组件
interface IHeaderItem {
  title: string;
  subtitle: string;
}

const IntroHead: React.FC<{ IHeaderItems: IHeaderItem }> = ({
  IHeaderItems,
}) => {
  return (
    <div className="flex flex-col py-20 justify-center items-center">
      <div className="text-gradient my-2 text-5xl text-center font-bold">
        {IHeaderItems.title}
      </div>
      <div className="my-2 text-center text-3xl">{IHeaderItems.subtitle}</div>
    </div>
  );
};

export default IntroHead;
