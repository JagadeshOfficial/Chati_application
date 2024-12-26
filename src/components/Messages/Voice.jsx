import { Check, Checks } from "@phosphor-icons/react";
import WaveForm from "../WaveForm";
import PropTypes from "prop-types"; // Importing PropTypes

export default function Voice({ incoming, timestamp, read_receipt }) {
    return incoming ? (
        <div className="max-w-125">
            <div className="mb-2.5 rounded-2xl rounded-tl-none px-5 py-3 bg-gray dark:bg-boxdark-2"></div>
            <WaveForm incoming={incoming} />
            <p className="text-xs">{timestamp}</p>
        </div>
    ) : (
        <div className="ml-auto max-w-125">
            <div className="mb-2.5 rounded-2xl rounded-br-none px-5 py-3"></div>
            <div className="flex flex-row items-center justify-center space-x-2">
                <div className={`${read_receipt !== 'read' ? "text-body dark:text-white" : "text-primary"}`}>
                    {read_receipt !== 'sent' ? (<Checks weight='bold' size={18} />) : (<Check weight='bold' size={18} />)}
                </div>
                <p className="text-xs text-right">{timestamp}</p>
            </div>
        </div>
    );
}

// Adding prop types for validation
Voice.propTypes = {
    incoming: PropTypes.bool.isRequired, // incoming is required and must be a boolean
    timestamp: PropTypes.string.isRequired, // timestamp is required and must be a string
    read_receipt: PropTypes.oneOf(["sent", "delivered", "read"]), // read_receipt can only be one of the specified values
};
