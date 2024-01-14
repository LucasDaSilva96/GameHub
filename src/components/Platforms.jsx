function Platforms({ platforms }) {
  function removeDuplicate(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  const platArray = platforms
    ? platforms
        ?.map((el) => {
          // console.log(el);
          return el.platform;
        })
        .map((el) => {
          return el.name.split(" ")[0];
        })
    : platforms;

  const uniquePlatArray =
    platArray?.length > 0 ? removeDuplicate(platArray) : platArray;

  return (
    <div className="flex items-center gap-1 ">
      {uniquePlatArray.map((el) => {
        if (el === "PC") {
          return <Pc key={el} />;
        }
        if (el === "PlayStation") {
          return <PlayStation key={el} />;
        }
        if (el === "Xbox") {
          return <Xbox key={el} />;
        }

        if (el === "Nintendo") {
          return <Nintendo key={el} />;
        }
        if (el === "Android") {
          return <Phone key={el} />;
        }
      })}
    </div>
  );
}

function Pc() {
  return (
    <svg
      className="max-w-6 min-w-3 "
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="#fff"
      viewBox="0 0 256 256"
    >
      <path d="M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z"></path>
    </svg>
  );
}

function PlayStation() {
  return (
    <svg
      className="max-w-6 min-w-3 "
      viewBox="0 0 21 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
        fill="#FFF"
      ></path>
    </svg>
  );
}

function Xbox() {
  return (
    <svg
      className="max-w-6 min-w-3 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill="#FFF"
        d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
      ></path>
    </svg>
  );
}

function Nintendo() {
  return (
    <svg
      className="max-w-6 min-w-3 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 16"
    >
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
      ></path>
    </svg>
  );
}

function Phone() {
  return (
    <svg
      className="max-w-6 min-w-4 "
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="#fff"
      viewBox="0 0 256 256"
    >
      <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z"></path>
    </svg>
  );
}

export default Platforms;
