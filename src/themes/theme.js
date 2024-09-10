// theme.js
export const theme = {
  button: {
    sizes: {
      large: {
        padding: "12px 24px",
        fontSize: "16px",
      },
      medium: {
        padding: "10px 20px",
        fontSize: "14px",
      },
      small: {
        padding: "8px 16px",
        fontSize: "12px",
      },
    },
    borderRadius: {
      rounded: "50px",
      normal: "4px",
    },
    variants: {
      primary: {
        backgroundColor: "#007bff",
        color: "#fff",
        hover: {
          backgroundColor: "#0056b3",
        },
      },
      secondary: {
        backgroundColor: "#6c757d",
        color: "#fff",
        hover: {
          backgroundColor: "#5a6268",
        },
      },
      danger: {
        backgroundColor: "#dc3545",
        color: "#fff",
        hover: {
          backgroundColor: "#c82333",
        },
      },
      success: {
        backgroundColor: "#28a745",
        color: "#fff",
        hover: {
          backgroundColor: "#218838",
        },
      },
      outline: {
        borderColor: {
          primary: "#007bff",
          secondary: "#6c757d",
          danger: "#dc3545",
          success: "#28a745",
        },
      },
      disabled: {
        backgroundColor: "#e0e0e0",
        color: "#6c757d",
      },
    },
  },
};
