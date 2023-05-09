export const ParagraphLink = ({href, color, children}) => {
    const myParagraph = (
    <>
       <a href={href} style={{textDecoration: "none", color: color}} target="_blank">
        <p>{children}</p>
       </a>
    </>
    );
    return myParagraph;
};

