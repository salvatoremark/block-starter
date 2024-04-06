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
    fontSize: "5vw",
  };
  const blockProps = useBlockProps.save({
    className: "custom-class",
    style: inlineStyles,
  });

  return (
    <>
      <div {...blockProps}>{__("Frontend", metadata.textdomain)}</div>
    </>
  );
}
export default Save;
