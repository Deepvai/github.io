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

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64 = reader.result;
    document.body.style.backgroundImage = `url(${base64})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = "all ease .3s";
    document.body.style.backgroundPosition = "center center";
    localStorage.setItem("wallpaper", base64);
  };
  reader.readAsDataURL(file);
};

  return (
    <>
      <input type="file" onChange={(o) => setfile(o.target.files[0])} />
      <button onClick={handleset}>set wallpaper</button>
    </>
  );
}
