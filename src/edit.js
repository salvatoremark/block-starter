/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import "./editor.scss";

function Edit(props) {
  const { attributes, setAttributes } = props;
  const inlineStyles = {
    color: "#ff6600",
    fontSize: "5vw",
  };
  const blockProps = useBlockProps({
    className: "custom-class",
    style: inlineStyles,
  });

  return (
    <>
      <div {...blockProps}>{__("Editor", metadata.textdomain)}</div>
    </>
  );
}
export default Edit;
