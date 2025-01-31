import { TransConsumer } from "I18N";
import config from "lib/config";
import { toast } from "react-hot-toast";

const localIcons = {
  en: {
    icon: "iconchinese",
    value: "zh",
  },
  zh: {
    icon: "iconenglish",
    value: "en",
  },
};

function Language({ local, setLocal }) {
  const { icon, value } = localIcons[local] || {};
  return (
    <a
      className={
        "iconfont flex-none cursor-pointer text-xl xl:mb-5 xl:text-3xl " + icon
      }
      onClick={() => {
        setLocal(value);
      }}
    ></a>
  );
}

const rssUrl = `${config.baseUrl}${config.rss.feed}`;

export default function Menu({ home = false }) {
  return (
    <div className="card menu mb-space flex h-[60px] flex-row items-center justify-between p-space xl:sticky xl:top-space xl:h-[80vh] xl:max-h-[700px] xl:min-h-[500px] xl:flex-none xl:flex-col">
      <a className="iconfont iconlogo mr-auto flex-none text-3xl xl:mr-0 xl:mb-auto xl:text-5xl"></a>
      <span
        className="iconfont iconrss mr-5 flex-none cursor-pointer text-xl xl:mr-0 xl:mb-12 xl:text-3xl"
        data-tooltip={rssUrl}
        onClick={() => {
          toast.success(rssUrl, {
            duration: 3000,
          });
          try {
            navigator.clipboard.writeText(rssUrl).then(() => {
              toast.success(`RSS feed copied to clipboard`, {
                duration: 3000,
              });
            });
          } catch (error) {
            toast.error(error.message);
          }
        }}
      />
      {home && (
        <a
          className="iconfont iconhome mr-5 flex-none cursor-pointer text-xl xl:mr-0 xl:mb-12 xl:text-2xl"
          href="/"
        ></a>
      )}
      <a
        className="iconfont icongithub mr-5 flex-none cursor-pointer text-xl xl:mr-0 xl:mb-12 xl:text-3xl"
        target="_blank"
        href="https://github.com/Yrobot"
      ></a>
      <a
        className="iconfont iconemail mr-5 flex-none cursor-pointer text-xl xl:mr-0 xl:mb-12 xl:text-3xl"
        href="mailto:y_robot@yeah.net?subject="
      ></a>
      <TransConsumer>
        <Language />
      </TransConsumer>
    </div>
  );
}
