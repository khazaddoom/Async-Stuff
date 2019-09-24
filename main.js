navigator.geolocation.getCurrentPosition((success) => {
    console.log(success)
}, (failure) => {
    console.log(failure)
});

function success() {
    console.log("Success...")
}

function failure() {
    console.log("Failed...")
}

