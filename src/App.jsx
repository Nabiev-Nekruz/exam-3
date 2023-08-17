import React, { useRef } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//////swiper////
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { EffectFlip, Navigation } from "swiper/modules";

///////swiper/////

/////modal//////
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import "./App.css";
import "./i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Swithcer from "./components/Switcher";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import picture1 from "./assets/1.svg";
import picture2 from "./assets/2.svg";
import picture3 from "./assets/3.svg";
import picture5 from "./assets/Frame (2).png";
import picture4 from "./assets/4.svg";
import picture6 from "./assets/5.svg";
import picture7 from "./assets/6.svg";
import picture8 from "./assets/7.svg";
import picture9 from "./assets/8.svg";
import picture10 from "./assets/9.svg";
import picture11 from "./assets/10.svg";
import picture12 from "./assets/11.svg";
import picture13 from "./assets/12.svg";
import picture14 from "./assets/13.svg";
import picture15 from "./assets/14.svg";
import picture16 from "./assets/16.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import picture20 from "./assets/20.svg";
import picture21 from "./assets/21.svg";
import picture22 from "./assets/22.svg";
import picture23 from "./assets/23.svg";
import picture24 from "./assets/24.svg";
import picture25 from "./assets/25.svg";
import picture26 from "./assets/26.svg";
import picture27 from "./assets/27.svg";
import picture28 from "./assets/28.svg";
import picture29 from "./assets/29.svg";
import picture30 from "./assets/30.svg";
import picture31 from "./assets/31.svg";
import picture32 from "./assets/32.svg";
import picture33 from "./assets/33.svg";
import picture34 from "./assets/34.svg";
import picture35 from "./assets/35.svg";
import picture37 from "./assets/37.svg";
import picture38 from "./assets/s1Header.png";
import picture39 from "./assets/s2Img.png";
import picture40 from "./assets/s3a.png";
import picture41 from "./assets/s3b.png";
import picture42 from "./assets/s3c.png";
import picture43 from "./assets/bgHeader.png";
import picture44 from "./assets/s7img.png";
import picture45 from "./assets/swiper2a.png";
import picture46 from "./assets/swiper2b.png";
import picture47 from "./assets/swiper2c.png";
import picture48 from "./assets/swiper2d.png";

function App() {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");

  const [modal2, setModal2] = useState(false);
  const [idx, setIdx] = useState(null);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/i?id=a291b8bea1a39101495c24a7d6bcddefc180c02b-8311701-images-thumbs&n=13",
      title: "KL",
      title1:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=bf30c9593ea091c3be1b50ab02758edd8b1ea6e7-9242319-images-thumbs&n=13",
      title: "Бетон",
      title1:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=da1ea0d5809301a3c9069cb2e9f9bfc171f415e7-9461935-images-thumbs&n=13",
      title: "Бетон",
      title1:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
    {
      id: 4,
      img: "https://avatars.mds.yandex.net/i?id=0c1723603b57dabf574b34036f965db8d973b495-8249078-images-thumbs&n=13",
      title: "Бетон",
      title1:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
    {
      id: 5,
      img: "https://avatars.mds.yandex.net/i?id=5c1f0f19dfde94293c0e646237f2b0a4cb0f4786-7554427-images-thumbs&n=13",
      title: "Бетон",
      title1:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
    {
      id: 6,
      img: "https://avatars.mds.yandex.net/i?id=2a00000179e6c3ab0b641c946382668fad72-4803223-images-thumbs&n=13",
      title: "Бетон",
      title1:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
  ]);
  const [modal1, setModal1] = useState(false);
  const [modalka, setModalka] = useState(false);

  const handleModal = (e) => {
    setModal2(true);
    setIdx(e.id);
    setText(e.title);
    setText1(e.title1);
    setText2(e.img);
  };

  const deleteTodo = (id) => {
    let ar = data.filter((e) => {
      return e.id !== id;
    });
    setData(ar);
    setModal2(false);
  };

  const editTodo = (event) => {
    event.preventDefault();

    let arr = data.map((e) => {
      if (idx === e.id) {
        e.title = event.target["nabi"].value;
      }
      return e;
    });
    setData(arr);
  };

  const editTodo2 = (event) => {
    event.preventDefault();

    let arr = data.map((e) => {
      if (idx === e.id) {
        e.title1 = event.target["nabi1"].value;
      }
      return e;
    });
    setData(arr);
  };

  const editTodo1 = (event) => {
    event.preventDefault();

    let arr = data.map((e) => {
      if (idx === e.id) {
        e.img = event.target["nabi2"].value;
      }
      return e;
    });
    setData(arr);
    setModal2(false);
  };

  const addTod = () => {
    let obj = {
      id: new Date().getTime(),
      title: title,
      title1: title1,
      img: title2,
    };
    let ar = [...data, obj];
    setData(ar);
    setTitle("");
    setTitle1("");
    setTitle2("");
    setModal1(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="section1 p-[40px]  bg-white dark:bg-black">
        <div className="container">
          <div className="justify-between flex items-center dark:text-white">
            <div className=" flex items-center">
              <img src={picture1} alt="" />
              <p className=" text-[22px]">{t("navbar.Stroy")}</p>
            </div>
            <div className=" ml-[50px]">
              <ul className=" flex gap-[30px] items-center">
                <li className=" text-blue-400 sm:hidden xl:flex">
                  {t("navbar.Glavnaya")}
                </li>
                <li className="sm:hidden xl:flex"> {t("navbar.O nas")}</li>
                <li className=" sm:hidden xl:flex">
                  {" "}
                  {t("navbar.Producsiya")}
                </li>
                <li className=" sm:hidden xl:flex"> {t("navbar.Prosess")}</li>
                <li className=" sm:hidden xl:flex">
                  {" "}
                  {t("navbar.Nadyognost")}
                </li>
                <li className=" sm:hidden xl:flex">{t("navbar.Klienti")}</li>
                <li className=" sm:hidden xl:flex p-[10px] bg-black text-white dark:bg-white dark:text-black rounded-[5px]">
                  {t("navbar.Demo")}
                </li>
                <div className=" flex items-center sm:hidden xl:flex">
                  <div>
                    <IconButton
                      className=" dark:text-white"
                      onClick={() => setModalka(true)}
                    >
                      <LanguageIcon />
                    </IconButton>
                  </div>
                  {/* <select
                    className=" dark:text-black"
                    onChange={(event) => changeLanguage(event.target.value)}
                    name=""
                    id=""
                  >
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                    <option value="TJ">TJK</option>
                  </select> */}
                  <Dialog open={modalka}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                      <Box
                        component="form"
                        sx={{ display: "flex", flexWrap: "wrap" }}
                      >
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-dialog-select-label">
                            Language
                          </InputLabel>
                          <Select
                            labelId="demo-dialog-select-label"
                            id="demo-dialog-select"
                            onChange={(event) =>
                              changeLanguage(event.target.value)
                            }
                            input={<OutlinedInput label="Age" />}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="ru">Ru</MenuItem>
                            <MenuItem value="en">En</MenuItem>
                            <MenuItem value="TJ">TJK</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setModalka(false)}>Cancel</Button>
                      <Button
                        onClick={(event) => setModalka(event.target.value)}
                      >
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div className=" sm:hidden xl:flex">
                  <Swithcer />
                </div>
                <div className=" xl:hidden">
                  <IconButton
                    className=" md:hidden dark:bg-slate-600"
                    onClick={() => setModal(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <div>
                  <Menu
                    className=""
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    open={modal}
                  >
                    <div className=" dark:bg-black dark:text-white">
                      <div className=" flex">
                        <MenuItem>{t("navbar.Glavnaya")}</MenuItem>
                        <IconButton
                          className=" dark:text-white"
                          onClick={() => setModalka(true)}
                        >
                          <LanguageIcon />
                        </IconButton>
                        {/* <select
                        
                        onChange={(event) => changeLanguage(event.target.value)}
                        name=""
                        id=""
                      >
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                        <option value="TJ">TJK</option>
                      </select> */}
                      </div>
                      <MenuItem>{t("navbar.O nas")}</MenuItem>
                      <MenuItem>{t("Producsiya")}</MenuItem>
                      <MenuItem>{t("navbar.Prosess")}</MenuItem>
                      <MenuItem>{t("navbar.Nadyognost")}</MenuItem>
                      <MenuItem>{t("navbar.Klienti")}</MenuItem>
                      <MenuItem>{t("navbar.Demo")}</MenuItem>
                      <div className=" ml-[50px]">
                        <Swithcer />
                      </div>
                      <div className=" mt-[20px] ml-[40px]">
                        <Button
                          onClick={() => setModal(false)}
                          variant="contained"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </Menu>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 p-[40px] bg-white dark:bg-black dark:text-white">
        <div className="container">
          <div className=" justify-center">
            <div className=" text-center  pt-[100px]">
              <p className=" sm:text-[25px] md:text-[48px]  text-[48px]">
                {t("text.Umnaya Dostavka")}
              </p>
              <div className=" gap-6">
                <button className=" justify-center p-[10px] bg-black text-white dark:bg-white dark:text-black rounded-[5px]">
                  {t("card10.text8")}
                </button>
                <button className=" justify-center p-[10px]  border-[1px] text-gray-500  rounded-[5px]">
                  {t("card10.text9")}
                </button>
              </div>
              <div className=" flex flex-wrap justify-center">
                <img src={picture43} alt="" />
              </div>
              <div className=" flex flex-wrap justify-center">
                <img src={picture3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3 bg-white dark:bg-black  dark:text-white p-[40px]">
        <div className="container">
          <div className=" pt-[40px] flex flex-wrap justify-center gap-[50px]">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              className=" text-center"
            >
              <div className=" flex flex-wrap justify-center">
                <img className="" src={picture5} alt="" />
              </div>
              <p className=" text-[18px]">{t("card.text1")}</p>
              <p>{t("card.text2")}</p>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              className=" text-center"
            >
              <div className=" flex flex-wrap justify-center">
                <img className="" src={picture5} alt="" />
              </div>
              <p className=" text-[18px]">{t("card.text1")}</p>
              <p>{t("card.text2")}</p>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              className=" text-center"
            >
              <div className=" flex flex-wrap justify-center">
                <img className="" src={picture5} alt="" />
              </div>
              <p className=" text-[18px]">{t("card.text1")}</p>
              <p>{t("card.text2")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section4 p-[40px] bg-white dark:bg-black dark:text-white">
        <div className="container">
          <div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" pt-[70px] text-center sm:text-start sm6:text-center sm:text-[18px] sm7:text-[32px]  text-[32px]"
            >
              <p>{t("card1.text1")}</p>
              <p>{t("card1.text2")}</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" flex flex-wrap justify-center"
            >
              <img src={picture38} alt="" />
            </div>
            <div className=" text-center sm:text-[18px] sm7:text-[32px]">
              <p>{t("card1.text3")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section5 p-[40px] bg-white dark:bg-black dark:text-white">
        <div className="container">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" flex items-center flex-wrap justify-center"
          >
            <div className=" sm:hidden sm6:block">
              <p className="  text-[32px] max-w-[600px]">{t("card2.text1")}</p>
              <p className=" text-[20px] w-[542px]">{t("card2.text2")}</p>
              <p className=" text-[20px]">{t("card2.text3")}</p>
            </div>
            <img src={picture39} alt="" />
          </div>
        </div>
      </div>
      <div className="section6 p-[40px] bg-white dark:bg-black">
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="2000">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={picture8} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture9} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture10} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture11} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture12} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture13} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="section7 p-[40px] bg-white dark:bg-black dark:text-white">
        <div className="container">
          <div>
            <div className=" text-center sm:text-start sm6:text-center">
              <p className=" sm:text-[18px] sm7:text-[32px] text-[32px]">
                {t("card3.text1")}
              </p>
              <p className="  sm:text-[18px] sm7:text-[32px] text-[32px]">
                {t("card3.text2")}
              </p>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-duration="3000"
              className=" flex w-[65%] gap-[50px] items-center m-auto sm:block
              xl:flex justify-center"
            >
              <div className="pt-[50px]">
                <p className=" text-[18px]">{t("card4.text1")}</p>
                <p>{t("card4.text2")}</p>
              </div>
              <div>
                <img
                  className=" max-w-none sm:w-[260px] sm5:w-auto"
                  src={picture40}
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-duration="3000"
              className=" pt-[50px] gap-[50px] flex w-[65%] items-center m-auto sm:block xl:flex justify-center"
            >
              <div>
                <img
                  className=" max-w-none sm:w-[260px] sm5:w-auto"
                  src={picture41}
                  alt=""
                />
              </div>
              <div className="pt-[50px]">
                <p className=" text-[18px]">{t("card5.text1")}</p>
                <p>{t("card5.text2")}</p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-duration="3000"
              className=" pt-[50px] gap-[50px] flex w-[65%] items-center m-auto sm:block xl:flex justify-center"
            >
              <div className="pt-[50px]">
                <p className=" text-[18px]">{t("card6.text1")}</p>
                <p>{t("card6.text2")}</p>
              </div>
              <div>
                <img
                  className=" max-w-none sm:w-[260px] sm5:w-auto"
                  src={picture42}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section8 bg-white dark:bg-black dark:text-white  p-[40px]">
        <div className="container">
          <div>
            <div className=" text-center">
              <p className=" text-[32px]">{t("card7.text1")}</p>
              <IconButton onClick={() => setModal1(true)}>
                <Button variant="contained">
                  <GroupAddIcon />
                </Button>
              </IconButton>
              <p className=" text-gray-500 text-[32px]">{t("card7.text2")}</p>
            </div>
            <div className=" flex flex-wrap justify-center pt-[50px] gap-[100px]">
              {data.map((e) => {
                return (
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className=" flex"
                  >
                    <div className=" flex ">
                      <div>
                        <img
                          className=" w-[60px] rounded-[30px] h-[60px]"
                          src={e.img}
                        />
                      </div>
                      <div>
                        <p className=" text-[18px]">{e.title}</p>
                        <p className=" text-[16px] w-[270px]">{e.title1}</p>
                        <div className="">
                          <IconButton onClick={() => deleteTodo(e.id)}>
                            <Button variant="contained" color="error">
                              <DeleteIcon />
                            </Button>
                          </IconButton>
                          <IconButton onClick={() => handleModal(e)}>
                            <Button variant="contained" color="warning">
                              <ModeEditOutlineIcon />
                            </Button>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Dialog
                open={modal1}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle className=" border-[3px]">
                  {" "}
                  <input
                    type="text"
                    name=""
                    value={title1}
                    onChange={(event) => setTitle1(event.target.value)}
                    id=""
                    placeholder="О Машине"
                  />
                </DialogTitle>
                <DialogTitle className=" border-[3px]">
                  {" "}
                  <input
                    type="text"
                    value={title}
                    onChange={(even) => setTitle(even.target.value)}
                    name=""
                    id=""
                    placeholder="Имя Машины"
                  />
                </DialogTitle>
                <DialogTitle className=" border-[3px]">
                  {" "}
                  <input
                    type="text"
                    name=""
                    value={title2}
                    onChange={(event) => setTitle2(event.target.value)}
                    id=""
                    placeholder=" Введите url картинки"
                  />
                </DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => addTod()}
                    variant="contained"
                    color="success"
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => setModal1(false)}
                    variant="contained"
                    color="error"
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>

              {modal2 ? (
                <Dialog
                  open={modal2}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>
                    <form onSubmit={(event) => editTodo(event)}>
                      <input
                        type="text"
                        onChange={(event) => setText(event.target.value)}
                        value={text}
                        name="nabi"
                        id=""
                      />
                    </form>
                  </DialogTitle>
                  <DialogTitle>
                    <form onSubmit={(event) => editTodo2(event)}>
                      <input
                        type="text"
                        onChange={(event) => setText1(event.target.value)}
                        value={text1}
                        name="nabi1"
                        id=""
                      />
                    </form>
                  </DialogTitle>
                  <DialogTitle>
                    <form onSubmit={(event) => editTodo1(event)}>
                      <input
                        type="text"
                        onChange={(event) => setText2(event.target.value)}
                        value={text2}
                        name="nabi2"
                        id=""
                      />
                    </form>
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={() => setModal2(false)}>Disagree</Button>
                    <Button type="submit" onClick={() => setModal2(false)}>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="section9 p-[40px] bg-white dark:bg-black dark:text-white">
        <div className="container">
          <div className=" text-center">
            <div className=" ">
              <p className=" text-[32px]">{t("card8.text1")}</p>
              <p className=" text-[20px]">{t("card8.text2")}</p>
            </div>
            <div className=" flex gap-[40px] sm:block md:flex pt-[80px]">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" justify-center flex flex-wrap"
              >
                <img src={picture21} alt="" />
                <div>
                  <p className=" text-[18px]">{t("card9.text1")}</p>
                  <p className="text-[18px]">{t("card9.text2")}</p>
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" justify-center flex flex-wrap"
              >
                <img src={picture22} alt="" />
                <div>
                  <p className=" text-[18px]">{t("card9.text3")}</p>
                  <p className=" text-[18px]">{t("card9.text4")}</p>
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" justify-center flex flex-wrap"
              >
                <img src={picture23} alt="" />
                <div>
                  <p className=" text-[18px]">{t("card9.text5")}</p>
                  <p className=" text-[18px]">{t("card9.text6")}</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-wrap justify-center mt-[30px] sm:hidden md:flex">
              <img src={picture24} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section10 p-[40px] bg-black text-white">
        <div className="container">
          <div
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className=" sm:p-0 sm2:p-[60px]"
          >
            <p className=" text-[32px]">{t("card10.text1")}</p>
            <div className=" p-[40px] flex sm:block xl1:flex ">
              <div className=" flex flex-wrap justify-center">
                <div className=" flex-wrap justify-center">
                  <p className=" text-[18px]">{t("card10.text2")}</p>
                  <p className=" text-[18px] mt-[20px] text-gray-500">
                    {t("card10.text3")}
                  </p>
                  <p className=" text-[18px] mt-[20px]">{t("card10.text4")}</p>
                  <p className=" text-[18px] text-gray-500 ">
                    {t("card10.text5")}
                  </p>
                  <p className=" text-[18px] mt-[20px] ">{t("card10.text6")}</p>
                  <p className=" text-[18px] text-gray-500  ">
                    {t("card10.text7")}
                  </p>
                  <div className=" flex items-center gap-[20px] mt-[40px]">
                    <p className=" text-[18px] bg-[white] p-[10px] rounded-[10px] text-black">
                      {t("card10.text8")}
                    </p>
                    <p className=" text-[18px] p-[10px] border-[1px] rounded-[3px]">
                      {t("card10.text9")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className=" flex flex-wrap justify-center mt-[30px]"
              >
                <img
                  className=" max-w-none  sm:w-[330px] sm5:w-auto "
                  src={picture25}
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" flex mt-[40px] sm:block md:flex gap-[40px]"
            >
              <div>
                <div className=" flex flex-wrap justify-center">
                  <img src={picture26} alt="" />
                </div>
                <div className=" text-center">
                  <p className=" text-[18px]">{t("card11.text1")}</p>
                  <p>{t("card11.text2")}</p>
                </div>
              </div>
              <div>
                <div className=" flex flex-wrap justify-center">
                  <img src={picture27} alt="" />
                </div>
                <div className=" text-center">
                  <p className=" text-[18px]">{t("card11.text3")}</p>
                  <p>{t("card11.text4")}</p>
                </div>
              </div>
              <div>
                <div className=" flex flex-wrap justify-center">
                  <img src={picture28} alt="" />
                </div>
                <div className=" text-center">
                  <p className=" text-[18px]">{t("card11.text5")}</p>
                  <p>{t("card11.text6")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section11 bg-white p-[40px] dark:bg-black dark:text-white">
        <div className="container">
          <div className=" flex  sm:block xl1:flex">
            <div data-aos="zoom-in-right" data-aos-duration="2000">
              <div className=" flex flex-wrap justify-center">
                <p className=" text-[32px]">{t("card12.text1")}</p>
              </div>
              <div className=" flex flex-wrap justify-center">
                <p className=" text-[20px] text-gray-400">
                  {t("card12.text2")}
                </p>
              </div>
              <div className=" flex flex-wrap justify-center">
                <img src={picture44} alt="" />
              </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
              <div className=" flex gap-[30px]">
                <div>
                  <p className=" border-[1px] p-[8px]">1</p>
                </div>
                <div>
                  <p className=" text-[17px]">{t("card12.text3")}</p>
                  <p className=" text-[17px] text-gray-500">
                    {t("card12.text4")}
                  </p>
                </div>
              </div>
              <div className=" flex gap-[30px] mt-[40px]">
                <div>
                  <p className=" border-[1px] p-[8px]">2</p>
                </div>
                <div>
                  <p className=" text-[17px]">{t("card12.text5")}</p>
                  <p className=" text-[17px] text-gray-500">
                    {t("card12.text6")}
                  </p>
                </div>
              </div>
              <div className=" flex gap-[30px] mt-[40px]">
                <div>
                  <p className=" border-[1px] p-[8px]">3</p>
                </div>
                <div>
                  <p className=" text-[17px]">{t("card12.text7")}</p>
                  <p className=" text-[17px] text-gray-500">
                    {t("card12.text8")}
                  </p>
                </div>
              </div>
              <div className=" flex gap-[30px] mt-[40px]">
                <div>
                  <p className=" border-[1px] p-[8px]">4</p>
                </div>
                <div>
                  <p className=" text-[17px]">{t("card12.text9")}</p>
                  <p className=" text-[17px] text-gray-500">
                    {t("card12.text10")}
                  </p>
                  <div className=" flex gap-[20px] justify-center">
                    <button className=" p-[10px] bg-black text-white rounded-[6px]">
                      {t("card10.text8")}
                    </button>
                    <button className=" p-[10px] border-[1px] text-black dark:text-white rounded-[6px]">
                      {t("card10.text9")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section12 bg-white dark:bg-black dark:text-white p-[40px]">
        <div className="container">
          <div>
            <div className=" text-center">
              <p className=" text-[32px]">{t("card13.text1")}</p>
              <p className=" text-[20px]">{t("card13.text2")}</p>
            </div>
            <div className=" flex items-center sm:block lgp:flex">
              <div data-aos="fade-right" data-aos-duration="2000" className=" ">
                <div className=" flex">
                  <img src={picture30} alt="" />
                  <div>
                    <p>{t("card13.text3")}</p>
                    <p>{t("card13.text4")}</p>
                  </div>
                </div>
                <div className=" flex mt-[30px]">
                  <img src={picture30} alt="" />
                  <div>
                    <p>{t("card13.text3")}</p>
                    <p>{t("card13.text4")}</p>
                  </div>
                </div>
                <div className=" flex mt-[30px]">
                  <img src={picture30} alt="" />
                  <div>
                    <p>{t("card13.text3")}</p>
                    <p>{t("card13.text4")}</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className=" flex justify-center border-[3px] lgp:w-[1000px] "
              >
                <div className=" items-center">
                  <p className=" text-[30px] pl-[40px] pt-[40px]">
                    {t("card13.text11")}
                  </p>
                  <img
                    className=" pl-[30px] pt-[40px] pb-[30px]"
                    src={picture31}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section13 p-[80px] bg-white dark:bg-black">
        <div className="container">
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className=" flex gap-[230px] justify-center flex-wrap"
          >
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={picture45} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture46} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture47} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={picture48} />
              </SwiperSlide>
            </Swiper>
            {/* <img src={picture32} alt="" />
            <img src={picture33} alt="" />
            <img src={picture34} alt="" />
            <img src={picture35} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="section14  dark:bg-none dark:bg-black dark:text-white p-[40px]">
        <div className="container">
          <div>
            <div data-aos="zoom-in-right" data-aos-duration="2000">
              <p className=" sm:text-[25px] sm6:text-[45px] text-center   pt-[40px]">
                {t("card13.text12")}
              </p>
              <div className=" flex flex-wrap justify-center gap-[30px]">
                <button className=" p-[10px] dark:bg-white dark:text-black bg-black rounded-[10px] text-white">
                  {t("card10.text8")}
                </button>
                <button className=" p-[10px] bg-white dark:text-black border-[1px] rounded-[10px]">
                  {t("card13.text13")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section15 p-[40px] bg-white dark:bg-black dark:text-white">
        <div className="container">
          <div className=" flex sm:gap-[60px] xl1:gap-[240px] flex-wrap justify-center items-center">
            <div>
              <div className=" flex items-center">
                <img src={picture1} alt="" />
                <p>{t("navbar.Stroy")}</p>
              </div>
              <div>
                <p className=" text-[16px]">{t("card14.text1")}</p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text2")}
                </p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text3")}
                </p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text4")}
                </p>
                <img src={picture37} alt="" />
              </div>
            </div>
            <div>
              {/* <div className=" flex items-center">
                <img src={picture1} alt="" />
                <p>{t("navbar.Stroy")}</p>
              </div> */}
              <div>
                <p className=" text-[16px]">{t("card14.text5")}</p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text6")}
                </p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text7")}
                </p>
              </div>
            </div>
            <div>
              {/* <div className=" flex items-center">
                <img src={picture1} alt="" />
                <p>{t("navbar.Stroy")}</p>
              </div> */}
              <div>
                <p className=" text-[16px] ">{t("card14.text8")}</p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text9")}
                </p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text10")}
                </p>
              </div>
            </div>
            <div>
              {/* <div className=" flex items-center">
                <img src={picture1} alt="" />
                <p>{t("navbar.Stroy")}</p>
              </div> */}
              <div>
                <p className=" text-[16px]">{t("card14.text11")}</p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text12")}
                </p>
                <p className="  sm:hidden sm10:block text-[16px] text-gray-500">
                  {t("card14.text13")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
