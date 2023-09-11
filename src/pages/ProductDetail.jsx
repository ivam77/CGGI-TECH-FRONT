import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/actions/product.js';
import { api, apiUrl, endpoints } from '../utils/api.js';
import { Link as Anchor, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'; // Asegúrate de importar SweetAlert
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetail = () => {
  const  _id  = useParams()
  const {id} =_id
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cuota12, setCuota12] = useState(0);
  const [cuota6, setCuota6] = useState(0);
  const [cuota3, setCuota3] = useState(0);
  const [mainImage, setMainImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isTechnicalModalOpen, setIsTechnicalModalOpen] = useState(true);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const inputProduct = useRef()
  const captureId=inputProduct.current?.value
  const product = useSelector((state) => state.product.product);

  function clickAddToCart() {
    if (captureId && product) {
      const currentCart = JSON.parse(localStorage.getItem('product cart')) || [];
  
      currentCart.push(captureId);
      localStorage.setItem('product cart', JSON.stringify(currentCart));
  
      // Mostrar la alerta de éxito
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product was added to the cart',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
 
function navigateToHomePage() {
    navigate("/");
  }

  const fetchProductDetail = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.product + id);
      dispatch(setProduct(data.product));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.products, {
        params: {
          type: product.type,
          limit: 20
        },
      });

      if (data.response && Array.isArray(data.response)) {
        const filteredProducts = data.response.filter((item) => item.type === product.type);
        setRelatedProducts(filteredProducts.slice(0, 20));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
    window.scrollTo(0, 200)
  }, [dispatch, id]);

  useEffect(() => {
    if (product && product.price) {
      setCuota12((product.price + (product.price * 52.63 / 100)) / 12);
      setCuota6((product.price + (product.price * 23.94 / 100)) / 6);
      setCuota3((product.price + (product.price * 11.55 / 100)) / 3);

      if (product.cover_photo && product.cover_photo.length > 0) {
        setMainImage(product.cover_photo[0]);
      }
    }
    fetchRelatedProducts();
  }, [product]);

  const formatCurrency = (amount) => {
    if (typeof amount === 'number') {
      return `USD $${amount.toFixed(0)}`;
    } else {
      return '';
    }
  };

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-prev-arrow absolute mt-[160px]" onClick={onClick}>
        <img src="/right.png" className='w-[30px]'/>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-next-arrow absolute mt-[-288px] ms-[1650px]" onClick={onClick}>
        <img src="/leftc.png"/>
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerPadding: '10px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const openTechnicalModal = () => {
    setIsTechnicalModalOpen(true);
    setIsDescriptionModalOpen(false);
  };

  const openDescriptionModal = () => {
    setIsDescriptionModalOpen(true);
    setIsTechnicalModalOpen(false);
  };

  const ModalTechnicalCharacteristics = () => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className='w-full flex flex-col justify-center items-center'>
            <div className='lg:w-[60%] w-full mt-20'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-semibold text-slate-600 mb-2 mt-[-40px]'>{product.brand}</p>
                <p className='text-xl font-semibold mb-4'>{product.title}</p>
              </div>
              <div className='m-6'>
                <p className='border-b-2 pb-4 mb-4 text-2xl font-semibold text-center lg:text-start'>Technical characteristics</p>
                  <div>
                  {
                  (product.brand === "TCL" || product.brand === "Philips" || product.brand === "Samsung") && product.type === "TV" ? (
                      <div className='flex flex-row w-full justify-center'>
                        <div className='flex flex-col justify-between w-[80%]'>
                          <p className='font-semibold text-xl'>Screen</p>
                          <div className='border-b-2 pb-4 mb-4 ms-[20%]'>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                              <p className='font-semibold'>Inches</p>
                              <p className='lg:me-[20%] w-[40%]'>{product.description.screen.Inches}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Resolution</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.screen.Resolution}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Screen Format</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.screen.ScreenFormat}</p>
                            </div>
                          </div>
                          <p className='font-semibold text-xl'>General Features</p>
                          <div className='border-b-2 pb-4 mb-4 ms-[20%]'>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Smart TV</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.GeneralFeatures.SmartTV}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Processor</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.screen.Processor}</p>
                            </div>
                          </div>
                          <p className='font-semibold text-xl'>Connectivity</p>
                          <div className='border-b-2 pb-4 mb-4 ms-[20%]'>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Inputs HDMI</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Connectivity.InputsHDMI}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Inputs USB</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Connectivity.InputsUSB}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Internet Connection</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Connectivity.InternetConnection}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>NFC</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Connectivity.NFC}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Headphone Jack</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Connectivity.HeadphoneJack}</p>
                            </div>                         
                          </div>
                          <p className='font-semibold text-xl'>Sound</p>
                          <div className='border-b-2 pb-4 mb-4 ms-[20%]'>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Audio Formats</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Sound.AudioFormats}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Number Of Speakers</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Sound.NumberOfSpeakers}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Power</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Sound.Power}</p>
                            </div>
                          </div>
                          <p className='font-semibold text-xl'>Dimensions</p>
                          <div className='border-b-2 pb-4 mb-4 ms-[20%]'>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Hihg</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.High}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Width</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.Width}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Depth</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.Depth}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>High Based</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.HighBased}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>Width With Base</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.WidthWithBase}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Depth With Base</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.DepthWithBase}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                            <p className='font-semibold'>VESA Measure</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.VESAmeasure}</p>
                            </div>
                            <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                            <p className='font-semibold'>Weight</p>
                            <p className='lg:me-[20%] w-[40%]'>{product.description.Dimensions.Weight}</p>
                            </div>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full'>
                          <p className='font-semibold text-xl'>Model</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Model}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full'>
                          <p className='font-semibold text-xl'>Origin</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Origin}</p>
                          </div>
                        </div>
                      </div>
                    ) : (product.brand === "JBL" || product.brand === "Philips" || product.brand === "DAEWOO") && product.type === "SPEAKERS" ? (
                      <div className='flex flex-row w-full justify-center'>
                        <div className='flex flex-col w-[80%]'>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>EAN</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.EAN}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>High</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.High}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Width</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Width}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>Color</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Guarantee</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Guarantee}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>Model</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Model}</p>
                          </div>

                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Origin</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Origin}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>Weight</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Weight}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Depth</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Depth}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>ESMA</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.ESMA}</p>
                          </div>
                        </div>
                    </div>
                    ) : (product.brand === "DAEWOO" || product.brand === "SOUL" || product.brand === "STROMBERG" || product.brand === "PHILIPS") && product.type === "HEADPHONES" ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>EAN</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.EAN}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>High</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.High}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Width</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Width}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Depth</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Depth}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Guarantee</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Guarantee}</p>
                        </div>

                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Origin</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Origin}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Type</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Type}</p>
                        </div>
                      </div>
                  </div>
                    ) : (product.brand === "SONY" || product.brand === "GoPro") && product.type === "CAMERAS" ? (
                      <div className='flex flex-row w-full justify-center'>
                        <div className='flex flex-col w-[80%]'>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Digital Zoom</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.DigitalZoom}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>Connections</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Connections}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full'>
                          <p className='font-semibold text-xl'>Model</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Model}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full'>
                          <p className='font-semibold text-xl'>Origin</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.Origin}</p>
                          </div>
                        </div>
                      </div>
                    ) : (product.brand === "HyperX" || product.brand === "Noga" || product.brand === "Razer" || product.brand === "Blue") && product.type === "MICROPHONE" ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Model</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Model}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Cable Length</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.CableLength}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Built In Speakers</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.BuiltInSpeakers}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Bluetooth</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Bluetooth}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Input</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Input}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Output</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Output}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Led Light</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.LedLight}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Sensitivity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Sensitivity}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Compatible Devices</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.CompatibleDevices}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Weight</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Weight}</p>
                        </div>
                      </div>
                    </div>                      
                    ) : (product.brand === "HP" || product.brand === "LENOVO" || product.brand === "ACER" || product.brand === "ASUS" || product.brand === "APPLE") && (product.type === "NOTEBOOK" ||product.type === "DESKTOP" ) ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Screen</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Screen}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Processor</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Processor}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Operating System</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.OperatingSystem}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Storage</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Storage}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>RAM</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.ram}</p>
                        </div>
                      </div>
                    </div>       
                    ) : (product.brand === "Samsung" || product.brand === "Apple" || product.brand === "Xiaomi" || product.brand === "Iphone") && (product.type === "Phones" || product.type === "Tabs") ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Screen</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Screen}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Processor</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Processor}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Operating System</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.OperatingSystem}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Storage</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Storage}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Camera</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Camera}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Connectivity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Connectivity}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>NFC</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.NFC}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Batery</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Batery}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                      </div>
                    </div>
                    ) : product.type === "Laundry" ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Size</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Size}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Weight</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.weight}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Capacity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Capacity}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>WashType</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.WashType}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Velocity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Velocity}</p>
                        </div>
                      </div>
                    </div>
                    ) : product.type === "Blender" ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Size</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Size}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Voltage</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.voltage}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Capacity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Capacity}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Power</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Power}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Velocity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Velocity}</p>
                        </div>
                      </div>
                    </div>    
                    ) : product.type === "Kitchen" ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Burners</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Burners}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Tactil</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.tactil}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Ignition</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.ignition}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Oven</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.oven}</p>
                        </div>
                      </div>
                    </div>
                    ) : product.type === "Air" ? (
                      <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Power Refrigeration</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.PowerRefrigeration}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Power Heating</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.PowerHeating}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Type Air</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.TypeAir}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Voltage</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.voltage}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Size</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Size}</p>
                        </div>
                      </div>
                    </div> 
                    ) : product.type === "Fridge" ? (
                    <div className='flex flex-row w-full justify-center'>
                      <div className='flex flex-col w-[80%]'>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Color</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Color}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Capacity</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Capacity}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Tech</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Tech}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                        <p className='font-semibold text-xl'>Digital</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Digital}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Voltage</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.voltage}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Size</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Size}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                        <p className='font-semibold text-xl'>Weight</p>
                        <p className='lg:me-[16%] w-[40%]'>{product.description.Weight}</p>
                        </div>
                      </div>
                    </div>
                    ) : (product.type === "Mouse" || product.type === "Chair") ? (
                      <div className='w-[60%] mt-20'>
                        <div className='flex flex-col justify-center items-center'>
                          <p className='text-lg font-semibold text-slate-600 mb-2 mt-[-40px]'>{product.brand}</p>
                          <p className='text-xl font-semibold mb-4'>{product.title}</p>
                        </div>
                        <div className='m-6'>
                          <p className='border-b-2 pb-4 mb-4'>{product.description.Text}</p>
                        </div>
                      </div>
                      ) : (product.type === "pc" && product.category === "gamers") ? (
                      <div className='flex flex-row w-full justify-center'>
                        <div className='flex flex-col w-[80%]'>
                          <p className='font-semibold text-xl'>Features</p>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Case</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.case}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>Monitor</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.monitor}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Processor</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.processor}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-100'>
                          <p className='font-semibold text-xl'>Motherboard</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.motherboard}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Graphics Card</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.graphics_card}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Peripherals</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.peripherals}</p>
                          </div>
                          <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Storage</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.storage}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>RAM</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.ram}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Power Supply</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.power_supply}</p>
                        </div>
                        <div className='flex flex-row justify-between m-4 w-full bg-slate-200'>
                          <p className='font-semibold text-xl'>Stabilizer</p>
                          <p className='lg:me-[16%] w-[40%]'>{product.description.features.stabilizer}</p>
                        </div>
                      </div>
                    </div>                          
                    ):(
                        <p>ERROR 500</p>
                  )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ModalDescription = () => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[60%] mt-20'>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-semibold text-slate-600 mb-2 mt-[-40px]'>{product.brand}</p>
                <p className='text-xl font-semibold mb-4'>{product.title}</p>
              </div>
              <div className='m-6'>
                <p className='border-b-2 pb-4 mb-4'>{product.description.Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  function navigateToCategoryPage(){
    navigate(`/${product.type}`)
  }


  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex flex-col items-center justify-center bg-white'>
        {product && (
          <div className='flex flex-row items-start text-sm md:text-md md:w-[80%] mt-4'>
            <Anchor onClick={navigateToHomePage} className='hover:text-sky-600 hover:font-semibold'>Home</Anchor><img src="/left.png" className='h-[15px] md:h-[20px] mt-[3px]'/><Anchor onClick={navigateToCategoryPage} className='hover:text-sky-600 hover:font-semibold'>{product.type}</Anchor><img src="/left.png" className='h-[15px] md:h-[20px] mt-[3px]' /><p className='hover:text-sky-600 hover:font-semibold'>{product.title}</p>
          </div>
        )}
        {product && (
          <div className='w-[80%] flex flex-row items-center justify-center'>
              <div>
                  <div className='flex justify-end w-full flex-col lg:flex-row'>
                    <div className='flex flex-col'>
                      <img src="/envios.png" className='absolute w-[80px] mt-[30px]' />
                      <img src={mainImage} alt={product.title} className='md:h-[500px] object-contain p-4'/>
                      <div className='flex'>
                        {product.cover_photo && product.cover_photo.map((image, index) => (
                            <img key={index} src={image} alt={product.title} className='w-[30%] md:w-[200px] md:h-[200px] border rounded-md me-3 cursor-pointer object-contain hover:border-sky-600 hover:border-2' onClick={() => handleImageClick(image)} />
                        ))}
                      </div>
                    </div>
                    <div className='flex flex-col border rounded-md md:p-4 lg:ms-10 mt-6 lg:mt-0'>
                        <div className='border-b-2 rounded'>
                            <p className='text-slate-500 font-bold text-[20px]'>{product.brand}</p>
                            <p className='font-bold text-xl mb-1'>{product.title}</p>
                            <p className='font-semibold text-xl mb-2'>{formatCurrency(product.price)}</p>
                            <p className='font-bold text-sm'>Our banking promotions!</p>
                            <p className='flex items-start mt-2'>Pay in 12 installments of {formatCurrency(cuota12)}</p>
                            <p className='flex items-start'>Pay in 6 installments of {formatCurrency(cuota6)}</p>
                            <p className='flex items-start mb-2'>Pay in 3 installments of{formatCurrency(cuota3)}</p>
                            <p className='text-sm text-sky-700 mb-2'>See all payment methods</p>
                        </div>
                        <div className='mt-2 border-b-2'>
                            <p className='mb-2'>You are in </p>
                        </div>
                        <div className='mt-2 border-b-2'>
                            <p className='flex flex-row items-center text-lime-700'><img src="/entrega.png" className='w-[30px] me-4'/>Delivery $$$</p>
                            <p className='flex flex-row items-center mb-2'><img src="/tienda.png" className='w-[30px] me-4'/>Withdraw FREE at our branch. <span className='font-semibold text-lime-700 ms-2'>Withdraw it NOW!</span></p>
                            <p className='text-sm text-sky-700 mb-2'>See branches</p>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-4'>
                          <button ref={inputProduct} onClick={clickAddToCart}  value={id} className='border p-2 bg-[#007BFF] rounded-md w-[250px]'>
                            <p className='text-xl font-bold text-white'>Add to cart</p>
                          </button>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        )}
      </div>
      <div className='w-[full] flex flex-col items-center bg-slate-200 mt-6'>
        {relatedProducts.length > 0 && (
          <div className='w-[80%] mt-6 flex flex-col'>
            <p className='font-semibold text-center lg:text-start text-2xl mb-4'>People interested in this product also saw</p>
              <Slider {...sliderSettings}>
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct._id}>
                    <Anchor to={`/products/${relatedProduct._id}`}>
                      <div className='flex flex-col items-center justify-center mb-10 m-2 bg-white h-[300px] lg:h-[450px] rounded-2xl drop-shadow-xl hover:border-4'>
                        <img src={relatedProduct.cover_photo[0]} alt={relatedProduct.title} className='mb-4 h-[100px] lg:h-[250px]'/>
                        <p className='text-[18px] mb-2 text-center w-[80%]'>{relatedProduct.title}</p>
                        <p className=' font-semibold md:text-[22px] mb-2'>{formatCurrency(relatedProduct.price)}</p>
                        <p className='font-semibold text-lime-700 md:text-[18px] text-center mb-2'>Withdraw it NOW!</p>              
                      </div>
                    </Anchor>
                  </div>
                ))}
              </Slider>
          </div>
        )}
      </div> 
      <div className='bg-white border-b-2 w-full flex items-center justify-center'>
        <div className='lg:w-[80%] m-6 flex items-center'>
          <button onClick={openTechnicalModal}>
            <p className='font-bold text-xl m-6 hover:border-sky-500 hover:border-b-2 focus:ring focus:ring-blue-600'>Technical specifications</p>
          </button>
          <button onClick={openDescriptionModal}>
            <p className='font-bold text-xl m-6 hover:border-sky-500 hover:border-b-2'>Description</p>
          </button>
        </div>
      </div>
      {isTechnicalModalOpen && <ModalTechnicalCharacteristics onClose={() => setIsTechnicalModalOpen(false)} />}
      {isDescriptionModalOpen && <ModalDescription onClose={() => setIsDescriptionModalOpen(false)} />}   
    </div>
  );
};

export default ProductDetail;
