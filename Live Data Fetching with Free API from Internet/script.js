let images = ["https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/MRM_4847.JPG.webp", "https://www.livemint.com/lm-img/img/2023/07/13/600x338/PTI07-06-2023-000304A-0_1689252839424_1689252859448.jpg", "https://www.hindustantimes.com/ht-img/img/2023/07/14/1600x900/E-ISRO-s-Launch-Vehicle-Mark-III--LVM3--M4-rocket-_1689361470430.jpg", "https://www.hindustantimes.com/ht-img/img/2023/07/14/1600x900/E-ISRO-s-Launch-Vehicle-Mark-III--LVM3--M4-rocket-_1689361470430.jpg", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/chandrayaan-3_launch_b-sixteen_nine.jpg?VersionId=pbyYwM2jLZ.Y_oD544eYRHJ.D673xhp2&size=690:388", "https://images.indianexpress.com/2023/07/ISRO-chandrayaan-3-mission-1-1.jpg?w=414", "https://c.ndtvimg.com/2023-03/pd9d66qo_isro-oneweb-satellites-launch_625x300_26_March_23.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrJGQ3nqloQvA44duVmwdpoMKbRQoCHxlWA&usqp=CAU", "https://assets.telegraphindia.com/telegraph/2022/Oct/1666465000_isro.jpg", "https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/06/full/1688646416-0969.jpeg?im=FeatureCrop,size=(826,465)", "https://img.etimg.com/thumb/msid-66630725,width-640,height-480,imgsize-132430,resizemode-4/gslv-mk3-to-carry-a-rover-to-the-moon.jpg", "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/DKS_9683%20-%20Copy.JPG.webp", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYkIdgIO5pItYrmKjYRiWbVpC6tSNEJMTUA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_B4V-L2zzj3v5UmE15Zhgd8QU9CNBckbGkj_BUmAaHbCvZEXa6Tw2wKD-F73YfDTcVI&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswc5RuLJHE6tCPhrowuVZHvdboLKA6U5VDg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5L4ft68NyWtBI1OVrVtjwyM8J4cjKdijIgA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQE7IXMQ-jT8_93OLPS1YpeJT9IrFOTLeNSA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFymt-zEC-2bgrWDeDQT4ebM89Kz_HhHoskg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjat5FzjqANDyL4p7Z9I30LT41gyNf-rSoA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdCBUM7OlxGQR8SKxGu7Rr09Vt8q0LfjgRw&usqp=CAU"]


let url = "https://isro.vercel.app/api/centres"
let maindata = document.getElementById("maindata");


// Making Search Box work 

const searchinput = document.getElementById("searchinput");

searchinput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  console.log(value);

})

let isro = fetch(url)
isro.then((res) => {
  return res.json();
}).then((responseData) => {
  centres = responseData.centres
  // console.log(centres);
  console.log("start");
  // console.log("Status is: " + res.status())
  // console.log("First", data)
  // console.log(maindata)
  ihtml = "";
  for (info in centres) {
    // console.log("Inside For Loop")
    // console.log(info);
    // console.log("second", centres);
    let randomnum = Math.floor(Math.random() * images.length)

    ihtml += ` <div class="card mx-4 my-4" style="width: 20rem;">
        
        <img src=${images[randomnum]} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title"> Centre Name : ${centres[info].name} </h5>
        
        <p class="card-text"> Location: ${centres[info].Place} </p>
        
        <p class="card-text"> State: ${centres[info].State} </p> 
        
        <a href="https://www.isro.gov.in/" class="btn btn-primary"> Visit ISRO </a>
        </div>
        </div> `
  }

  maindata.innerHTML = ihtml;
  console.log("Data Fetched Successfully :) ")

}).catch(err => {
  console.log("Failed to Fetch Data", err)
  console.log(new Error())
  maindata.innerHTML = `<p> Failed to fetch Data from URL: ${url} :( </p> `
})