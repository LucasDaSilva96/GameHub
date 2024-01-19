import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function closeEscape(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", closeEscape);

      return function () {
        document.removeEventListener("keydown", closeEscape);
      };
    },
    [action, key]
  );
}
