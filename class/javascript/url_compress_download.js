function downloadFile(url)
{
    console.log("Downloading started.....");
    setTimeout(() => {
        var a=url.split("/").pop()
        console.log("Downloaded successfully...... "+ a);
        compressFile(a);
    }, 2000);
}

function compressFile(b)
{
    console.log("Compressing started......");
    setTimeout(() => {
        var res=b.replace(".mp3",".zip");
        console.log("Compressing successfull....."+ res);
        uploadFile(res);
    }, 2000);
}
function uploadFile(samp){
    console.log("Uploading started.....");
    setTimeout(() => {
        var upl="https://LocalStorage/"+samp;
        console.log("file uploaded..."+" "+upl);
        console.log("execution ends....");
    }, 2000);
}
console.log("Execution starts.....");
downloadFile("https://xyzabc/com/abc.mp3");
