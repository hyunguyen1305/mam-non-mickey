import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props) {
  useEffect(() => {
    const unlisten = props.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [props]);

  return null;
}

export default withRouter(ScrollToTop);
