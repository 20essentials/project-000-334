/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/css";

const rotar = keyframes`
  0% {
    --deg: 90deg;
    background-image:
      repeating-conic-gradient(from var(--deg) at 20% 20%, var(--primary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 50% 20%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 70% 20%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 20% 50%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 50% 50%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 70% 50%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 20% 70%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 50% 70%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
      repeating-conic-gradient(from var(--deg) at 70% 70%, var(--secondary-color) 0 1deg, transparent 2deg 3deg);
  }
  100% {
    --deg: 360deg;
    background-image:
      repeating-conic-gradient(from var(--deg) at 20% 30%, var(--primary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 50% 30%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 70% 30%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 20% 60%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 50% 60%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 70% 60%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 20% 80%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 50% 80%, var(--secondary-color) 0 1deg, #fff 2deg 20deg),
      repeating-conic-gradient(from var(--deg) at 70% 80%, var(--secondary-color) 0 1deg, #fff 2deg 20deg);
  }
`;

const appStyle = css`
  --primary-color: #00aa8822;
  --secondary-color: #60efff22;

  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue';

  animation: ${rotar} 120s linear infinite alternate both;

  @property --deg {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0deg;
  }
`;

export default function App() {
  return <div className={appStyle}></div>;
}
