let frame = document.querySelector("iframe");


const videos = {
  waFood: "https://www.youtube.com/embed/WWX8lLOP4TA",
  waBeach: "https://www.youtube.com/embed/lptTGHBy-YE",
  waHiking: "https://www.youtube.com/embed/QXz4d2o5_iI",
  
  orFood: "https://www.youtube.com/embed/7WRUkUSrG0I",
  orBeach: "https://www.youtube.com/embed/cjxv2N1egyI",
  orHiking: "https://www.youtube.com/embed/-iVhARbWctM",
  
  caFood: "https://www.youtube.com/embed/vEcMdj31XCs",
  caBeach: "https://www.youtube.com/embed/s4gXNT6KXLQ",
  caHiking: "https://www.youtube.com/embed/V1j29dw0v54",
};

document.querySelector("#submit").addEventListener("click", showVideo);

function showVideo(event) {
  event.preventDefault();
  let select = document.getElementById("SelectState");
  let stateValue = select.options[select.selectedIndex].value;

  let select2 = document.getElementById("SelectActivity");
  let activityValue = select2.options[select2.selectedIndex].value;

  console.log(stateValue, activityValue);
  
  if (stateValue === "WA") {
    if (activityValue === "food") {
      frame.src = videos.waFood;
    } else if (activityValue === "beach") {
      frame.src = videos.waBeach;
    } else if (activityValue === "hike") {
      frame.src = videos.waHiking;
      console.log(frame.src);
    }
  } else if (stateValue === "OR") {
    if (activityValue === "food") {
      frame.src = videos.orFood;
    } else if (activityValue === "beach") {
      frame.src = videos.orBeach;
    } else if (activityValue === "hike") {
      frame.src = videos.orHiking;
    }
  } else if (stateValue === "CA") {
    if (activityValue === "food") {
      frame.src = videos.caFood;
    } else if (activityValue === "beach") {
      frame.src = videos.caBeach;
    } else if (activityValue === "hike") {
      frame.src = videos.caHiking;
    }
  }
}
