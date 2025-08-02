import { useEffect, useState } from "react";

export default function Wallpaper() {
  const [file, setfile] = useState(null);

  useEffect(() => {
    const savedwallpaper = localStorage.getItem("wallpaper");
    if (savedwallpaper) {
      document.body.style.backgroundImage = `url(${savedwallpaper})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.transition = "all ease .3s";
      document.body.style.backgroundPosition = "center center";
    }
  }, []);

  const handleset = (e) => {
    e.preventDefault();
    if (!file) return;

    const urlFile = URL.createObjectURL(file);
    document.body.style.backgroundImage = `url(${urlFile})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = "all ease .3s";
    document.body.style.backgroundPosition = "center center";
    localStorage.setItem("wallpaper", urlFile);
  };
  return (
    <>
      <input type="file" onChange={(o) => setfile(o.target.files[0])} />
      <button onClick={handleset}>set wallpaper</button>
    </>
  );
}
