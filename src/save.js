/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

function Save(props) {
  const { attributes, setAttributes } = props;
  const inlineStyles = {
    color: "#ff6600",
    fontSize: "4em",
  };
  const blockProps = useBlockProps.save({
    className: "classname1 classname2",
    style: inlineStyles,
  });

  return (
    <>
      <div {...blockProps}>{__("Frontend", metadata.textdomain)}</div>
    </>
  );
}
export default Save;
