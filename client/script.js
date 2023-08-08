var fileList;
const file = document.getElementById("file");
const container = document.getElementById("container");
const notif = document.getElementById("notif");

const notify = (message, err) => {
    notif.innerText = message;
    if (err) {
        notif.classList.remove("bg-green-500");
        notif.classList.add("bg-red-500");
    } else {
        notif.classList.add("bg-green-500");
        notif.classList.remove("bg-red-500");
    }
    notif.classList.toggle("opacity-0");
    setTimeout(() => {
        notif.classList.toggle("opacity-0");
        notif.classList.remove("bg-red-500");
        notif.classList.add("bg-green-500");
    }, 1000);
};

file.addEventListener("change", (event) => {
    console.log(event.target.files);
    if (event.target.files.length === 0) {
        notify("couldn't add the file", true);
        return;
    }
    const fileList = event.target.files[0];
    notify(`added "${fileList.name}"`);
});

const submit = document.getElementById("submit");
submit.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!file.files || file.files?.length === 0) {
        notify("Please select a file", true);
        return;
    }
    const formData = new FormData();
    formData.append("file", file.files[0]);
    console.log("submit");
    try {
        const res = await fetch("http://localhost:4000/invites", {
        method: "POST",
        body: formData,
        });
        const data = await res.json();
        if (data.error) {
        notify(data.error, true);
        } else {
        notify(data.message);
        }
    } catch (e) {
        notify("failed to send invites.", true);
        console.log("error: ", e.message);
    }
});
