import PropTypes from 'prop-types';
import extractLinks from "../../utils/extractLinks";
import Microlink from "@microlink/react";
import { Check, Checks } from '@phosphor-icons/react';

export default function Text({
    incoming,
    author,
    timestamp,
    read_receipt,
    content,
}) {
    const { links, originalString } = extractLinks(content);

    return incoming ? (
        <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">
                {author}
            </p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2 space-y-2">
                <p dangerouslySetInnerHTML={{ __html: originalString }}></p>
                {links.length > 0 && links.map((link, index) => (
                    <Microlink key={index} className="w-full mt-2" url={link} />
                ))}
            </div>
            <p className="text-xs">
                {timestamp}
            </p>
        </div>
    ) : (
        <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 space-y-2">
                <p className="text-white" dangerouslySetInnerHTML={{ __html: originalString }}></p>
                {links.length > 0 && links.map((link, index) => (
                    <Microlink key={index} className="w-full mt-2" url={link} />
                ))}
            </div>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <div className={`${read_receipt !== 'read' ? "text-body dark:text-white" : "text-primary"}`}>
                    {read_receipt !== 'sent' ? (<Checks weight='bold' size={18} />) : (<Check weight='bold' size={18} />)}
                </div>
                <p className="text-xs">
                    {timestamp}
                </p>
            </div>

        </div>
    );
}

// Define PropTypes for validation
Text.propTypes = {
    incoming: PropTypes.bool.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    read_receipt: PropTypes.bool, // Optional prop
    content: PropTypes.string.isRequired,
};

// Define default props if necessary
Text.defaultProps = {
    read_receipt: false, // Default to false if not provided
};
