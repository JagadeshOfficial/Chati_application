import PropTypes from 'prop-types';

export default function MsgSeperator({ date }) {
    return (
        <div className="flex flex-row items-center space-x-5 w-full py-2">
            {/* Left Divider */}
            <div className="border-b border-stroke dark:border-strokedark grow"></div>

            {/* Date Section */}
            <div className="p-2 bg-gray dark:bg-boxdark-2 rounded-md text-xs text-body font-medium">
                {date || "Today"}
            </div>

            {/* Right Divider */}
            <div className="border-b border-stroke dark:border-strokedark grow"></div>
        </div>
    );
}

// Define prop types
MsgSeperator.propTypes = {
    date: PropTypes.string,
};

// Default props
MsgSeperator.defaultProps = {
    date: "Today",
};