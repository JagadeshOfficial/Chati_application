import PropTypes from "prop-types";
import { Check, Checks } from "@phosphor-icons/react";
import MediaMsgGrid from "../MediaMsgGrid";

export default function Media({ incoming, author, timestamp, read_receipt, caption }) {
  return incoming ? (
    <div className="max-w-125">
      <p className="mb-2.5 text-sm font-medium">{author}</p>
      <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2 space-y-2">
        {/* Media Message Grid */}
        <MediaMsgGrid incoming={incoming} />
        <p>{caption}</p>
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  ) : (
    <div className="max-w-125 ml-auto">
      <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 space-y-2">
        {/* Media Message Grid */}
        <MediaMsgGrid incoming={incoming} />
        <p className="text-white">{caption}</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2">
        <div className={`${read_receipt !== "read" ? "text-body dark:text-white" : "text-primary"}`}>
          {read_receipt !== "sent" ? (
            <Checks weight="bold" size={18} />
          ) : (
            <Check weight="bold" size={18} />
          )}
        </div>
        <p className="text-xs">{timestamp}</p>
      </div>
    </div>
  );
}

// PropTypes validation
Media.propTypes = {
  incoming: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  assets: PropTypes.array, // Add specifics if assets has a particular structure
  read_receipt: PropTypes.oneOf(["sent", "delivered", "read"]).isRequired,
  caption: PropTypes.string,
};

// Default Props (Optional)
Media.defaultProps = {
  assets: [],
  caption: "",
};
