var PicArr = new Array()
PicArr[0] = "images/free.jpg"
PicArr[1] = "images/night.jpg"
PicArr[2] = "images/path.jpg"
PicArr[3] = "images/tower.jpg"

var NameArr = new Array()
NameArr[0] = "Free"
NameArr[1] = "Night"
NameArr[2] = "Path"
NameArr[3] = "Tower"
NameArr[4] = "Tree"

document.write("<img src=" + PicArr[0] + ">");
document.write("<h2>Free</h2>")

function add() {
  const imageName = String(prompt("Enter path to image"));
  PicArr.push(imageName)
}

function next(i) {
  if (i < PicArr.length) {
    document.open()
    document.write("<img src=" + PicArr[i] + ">");
    document.write("<h2>" + NameArr[i] + "</h2>")
    document.write('<h1>Image carousel made by Samriddhi</h1>')
    i++;
    document.write("<br>")
    document.write(`<input type="button" name="b1" value="Next" onclick=next(${i})>`)
    document.write('<input type="button" name="a1" value="Add" onclick=add()>')
    document.close()
  }
  else{
    i = i % PicArr.length;
    document.open()
    document.write("<img src=" + PicArr[i] + ">");
    document.write("<h2>" + NameArr[i] + "</h2>")
    document.write('<h1>Image carousel made by Samriddhi</h1>')
    i++;
    document.write("<br>")
    document.write(`<input type="button" name="b1" value="Next" onclick=next(${i})>`)
    document.write('<input type="button" name="a1" value="Add" onclick=add()>')
    document.close()    
  }

}
