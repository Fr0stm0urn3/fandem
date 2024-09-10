import styled from "styled-components"
// import { devices } from "path-to-your-media-query-file"

export const DescriptionContainer = styled.div`
  max-width: 60.625rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0px;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #1b1a1a;
    margin-top: 2.5rem;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 30px;
    padding-left: 34px;
    padding-right: 34px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  p {
    color: #555555;
    padding-left: 34px;
    padding-right: 34px;
  }

  ul,
  ol {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }

  img {
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    margin-right: 0.5px;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin-top: 1rem;
  }

  blockquote {
    background-color: #f8f9fa;
    padding: 30px;
    color: #1b1a1a;
    font-size: 30px;
    font-style: italic;
    font-family: "Gilroy Medium", Roboto, Arial, sans-serif;
  }

  pre {
    box-sizing: border-box;
    overflow: auto;
    border-radius: 12px;
    line-height: 20px;
    padding: 10px;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }

  ul {
    margin-left: 1rem;
    color: #555555;

    li {
      padding: 0.5rem 0;
    }
  }
`

export const PostContainer1 = styled.div`
  max-width: 970px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0px;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #1b1a1a;
    margin-top: 2.5rem;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 40px;
    font-weight: 500;
    line-height: 62px;
    color: #1b1a1a;
  }

  p {
    color: #555555;
  }

  ul,
  ol {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }

  img {
    width: 100%;
    overflow: hidden;
    margin: 0px;
    margin-top: 20px;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin-top: 1rem;
  }

  blockquote {
    background-color: #f8f9fa;
    padding: 30px;
    color: #1b1a1a;
    font-size: 30px;
    font-style: italic;
    font-family: "Gilroy Medium", Roboto, Arial, sans-serif;
  }

  pre {
    box-sizing: border-box;
    overflow: auto;
    border-radius: 12px;
    line-height: 20px;
    padding: 10px;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }

  ul {
    margin-left: 1rem;
    color: #555555;

    li {
      padding-top: 1rem;
    }
  }
`

export const PostContainer = styled.div`
  max-width: 970px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0px;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #1b1a1a;
    margin-top: 2.5rem;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 40px;
    font-weight: 500;
    line-height: 62px;
    color: #1b1a1a;
  }

  p {
    color: #555555;
  }

  ul,
  ol {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }

  img {
    width: 100%;
    overflow: hidden;
    margin: 0px;
    margin-top: 20px;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin-top: 1rem;
  }

  blockquote {
    background-color: #f8f9fa;
    padding: 30px;
    color: #1b1a1a;
    font-size: 30px;
    font-style: italic;
    font-family: "Gilroy Medium", Roboto, Arial, sans-serif;
  }

  pre {
    box-sizing: border-box;
    overflow: auto;
    border-radius: 12px;
    line-height: 20px;
    padding: 10px;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word;
  }

  ul {
    margin-left: 1rem;
    color: #555555;

    li {
      padding-top: 1rem;
    }
  }

  @media (min-width: 969px) {
    margin: 0;

    ul {
      margin-left: 0;
    }

    h1 {
      font-size: 2rem;
    }

    h4 {
      font-size: 240px;
    }

    h2,
    h3,
    h4,
    h5 {
      font-size: 1.5rem;
    }

    blockquote {
      padding: 1rem;
      font-size: 1rem;
      margin: 1.5rem 0;
    }
  }
`
