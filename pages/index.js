import Link from 'next/link';
import { useState, useRef } from 'react';
import PriceTable2 from '../components/elements/PriceTable2';
import Layout from '../components/layout/Layout';
import OfferSlider from '../components/slider/Offer';
import TestimonialSlider from '../components/slider/Testimonial';

function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const newsletterSectionRef = useRef(null);

  // Function to scroll to the target section
  const scrollToNewsletter = () => {
    if (newsletterSectionRef.current) {
      newsletterSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  // Open modal
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const openModal = () => {
    setModal(!modal);
  };
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      <Layout>
        <section className='section-box'>
          <div className='banner-hero banner-1'>
            <div className='container'>
              <div className='row'>
                <div className=' mt-40 col-lg-7'>
                  <h1 className='text-display-2 color-prim'>
                    Launch your product
                    <span className='color-sec'> with a click!</span>
                  </h1>
                  <p className='mt-40 pr-40 text-body-text-md'>
                    <span className='color-sec text-body-lead'>
                      {' '}
                      Breaking Barriers.{' '}
                    </span>
                    Bridging the gap between distributors and manufacturers
                    worldwide.
                  </p>
                  <div className='mt-40'>
                    {/* Add onClick event to call scrollToNewsletter */}
                    <button
                      className='btn btn-prim icon-arrow-right-white'
                      onClick={scrollToNewsletter}
                    >
                      Get early access
                    </button>
                  </div>
                </div>
                <div className='col-lg-5 d-none d-lg-block'>
                  <div className='banner-imgs'>
                    <div className='video-block shape-1'></div>

                    <img
                      className='img-banner img-responsive shape-2'
                      alt='Model'
                      src='assets/imgs/page/homepage1/model.png'
                      style={{ height: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-box'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-sm-1 col-12' />
              <div className='col-lg-8 col-sm-10 col-12 text-center mt-70'>
                <h2 className='text-heading-1 color-gray-900'>
                  We are here to
                  <span className='color-sec'> break barriers!</span>
                  {/* <br className='d-lg-block d-none' />
                  the world over */}
                </h2>
                <p className='text-body-lead-large color-gray-600 mt-20'>
                  Get to know our vision and mission.
                </p>
              </div>
              <div className='col-lg-2 col-sm-1 col-12' />
            </div>
          </div>
          <div className='container'>
            <div className='text-center mt-90'>
              <ul className='nav' role='tablist'>
                <li onClick={() => handleOnClick(1)}>
                  <Link href='/#tab-1' legacyBehavior>
                    <a
                      className={
                        activeIndex === 1
                          ? 'btn btn-default btn-bd-green-hover btn-select active'
                          : 'btn btn-default btn-bd-green-hover btn-select'
                      }
                    >
                      Our Vision
                    </a>
                  </Link>
                </li>
                <li onClick={() => handleOnClick(2)}>
                  <Link href='/#tab-2' legacyBehavior>
                    <a
                      className={
                        activeIndex === 2
                          ? 'btn btn-default btn-bd-green-hover btn-select active'
                          : 'btn btn-default btn-bd-green-hover btn-select'
                      }
                    >
                      Our Mission
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='container'>
            <div className='tab-content'>
              <div
                className={
                  activeIndex === 1
                    ? 'tab-pane fade  active show'
                    : 'tab-pane fade '
                }
              >
                <div className='bg-light panel-box mt-50'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='box-optimized'>
                        <h3 className='text-heading-2'>
                          Connecting Pharma Future, Redefining Tomorrow
                        </h3>
                        <p className='text-body-excerpt mt-30'>
                          Within the next few years, we aspire to be recognized
                          not just as a platform but as industry experts and
                          trusted collaborators. We envision a future where
                          manufacturers, pharmaceutical companies, and
                          businesses collaborate effortlessly, breaking barriers
                          to bring groundbreaking products to the market. By
                          consistently delivering value, fostering innovation,
                          and building lasting relationships, we aim to be at
                          the forefront of industry transformation, contributing
                          to a healthier and more connected world.
                        </p>
                        {/* <div className='mt-40'>
                          <Link href='/page-service-1' legacyBehavior>
                            <a className='btn btn-default btn-white icon-arrow-right'>
                              Learn more
                            </a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      <div className='block-video icon-pattern'>
                        {/* <a
                          className='popup-youtube btn-play-video'
                          onClick={openModal}
                        ></a> */}
                        <img
                          className='img-responsive'
                          src='assets/imgs/page/homepage1/img-1.png'
                          alt='Agon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeIndex === 2
                    ? 'tab-pane fade  active show'
                    : 'tab-pane fade '
                }
              >
                <div className='bg-sec panel-box mt-50'>
                  <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                      <div className='box-optimized'>
                        <h3 className='text-heading-2 color-white'>
                          Break barriers, Forge Industry Excellence.
                        </h3>
                        <p className='text-body-excerpt mt-30 color-white'>
                          Our mission is to foster a dynamic and collaborative
                          ecosystem within the pharmaceutical industry. We
                          strive to break barriers, connecting manufacturers,
                          pharmaceutical companies, and businesses seamlessly.
                          By providing a platform that simplifies sourcing,
                          enhances partnerships, and promotes innovation, we aim
                          to be the driving force behind the industrys growth
                          and success. Our commitment is to empower businesses,
                          contribute to the advancement of pharmaceutical
                          solutions, and become the trusted partner of choice
                          for all stakeholders.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                      <div className='block-video icon-pattern'>
                        <img
                          className='img-responsive'
                          src='assets/imgs/page/homepage1/img-1-2.jpg'
                          alt='Agon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-box'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-sm-1 col-12' />
              <div className='col-lg-8 col-sm-10 col-12 text-center mt-100'>
                <h2 className='text-heading-1 color-gray-900'>
                  Empowering All Players
                  <br className='d-lg-block d-none' />
                  in the Chain
                </h2>
                <p className='text-body-lead-large color-gray-600 mt-20'>
                  Seamless Solutions for Manufacturers, Distributors, and Pharma
                  Innovators
                </p>
              </div>
              <div className='col-lg-2 col-sm-1 col-12' />
            </div>
          </div>

          <div className='container mt-70'>
            <div className='row'>
              <div className='col-lg-4 col-sm-12'>
                <div className='card-grid-1 bg-prim bg-business hover-up'>
                  <div className='grid-1-img'>
                    <img
                      src='/assets/imgs/page/homepage1/business-strategy.svg'
                      alt='Agon'
                    />
                  </div>
                  <h3 className='text-heading-3 mt-20 color-white'>CMO/CDMO</h3>
                  <p className='text-body-excerpt mt-20 color-white'>
                    Find a global stage. Expand your reach, connect with
                    distributors worldwide, and optimize production with our
                    insights.
                  </p>
                  <div className='mt-30'>
                    {/* Add onClick event to call scrollToNewsletter */}
                    <button
                      className='btn btn-default btn-white icon-arrow-right'
                      onClick={scrollToNewsletter}
                    >
                      Get early access
                    </button>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-sm-12 '>
                <div className='card-grid-1 bg-2 bg-local hover-up'>
                  <div className='grid-1-img'>
                    <img
                      src='/assets/imgs/page/homepage1/local.svg'
                      alt='Agon'
                    />
                  </div>
                  <h3 className='text-heading-3 mt-20 '>Distributor</h3>
                  <p className='text-body-excerpt mt-20'>
                    Access a vast array of verified manufacturers effortlessly.
                    Request, compare, and secure quotations seamlessly. Get
                    access to valuable industry insights and winning products
                  </p>
                  <div className='mt-30'>
                    {/* Add onClick event to call scrollToNewsletter */}
                    <button
                      className='btn btn-default btn-white icon-arrow-right'
                      onClick={scrollToNewsletter}
                    >
                      Get early access
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-12'>
                <div className='card-grid-1 bg-sec bg-social hover-up'>
                  <div className='grid-1-img'>
                    <img
                      src='/assets/imgs/page/homepage1/social.svg'
                      alt='Agon'
                    />
                  </div>
                  <h3 className='text-heading-3 mt-20 color-white '>
                    Pharma Innovator
                  </h3>
                  <p className='text-body-excerpt mt-20 color-white'>
                    Break barriers and propel your products onto the global
                    market.
                  </p>
                  <div className='mt-30'>
                    {/* Add onClick event to call scrollToNewsletter */}
                    <button
                      className='btn btn-default btn-white icon-arrow-right'
                      onClick={scrollToNewsletter}
                    >
                      Get early access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-box'>
          <div className='container mt-120'>
            <div className='bg-2 bdrd-58 pattern-white pb-60'>
              <div className='row'>
                <div className='col-lg-2 col-sm-1 col-12' />
                <div className='col-lg-8 col-sm-10 col-12 text-center mt-70'>
                  <h2 className='text-heading-1 color-gray-900'>
                    What We Offer
                  </h2>
                  <p className='text-body-lead-large color-gray-600 mt-20'>
                    What makes us different from others?
                  </p>
                </div>
                <div className='col-lg-2 col-sm-1 col-12' />
              </div>
              <div className='container mt-70'>
                <OfferSlider />
              </div>
            </div>
          </div>
        </section>

        <section className='section-box mt-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-12 col-sm-12 mt-50'>
                <h2 className='text-heading-1 color-gray-900 mb-30'>
                  How It Works
                </h2>
                <p className='text-body-excerpt color-gray-600'>
                  Get to know out process
                </p>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12 mt-50'>
                <div className='list-icons'>
                  <div className='item-icon pl-0'>
                    <div className='mb-15'>
                      <img
                        src='/assets/imgs/page/homepage2/icon-acquis.svg'
                        alt='Agon'
                      />
                    </div>
                    <h4 className='text-heading-4'>
                      1. Manufacturer Engagement
                    </h4>
                    <p className='text-body-text color-gray-600 mt-15'>
                      Collect Data: Manufacturers engage with Trillioni
                      providing crucial data on their capabilities, products,
                      and production costs.
                      <br className='d-lg-block d-none' />
                      Building Partnerships: We foster strong partnerships with
                      manufacturers, establishing a global network to enhance
                      collaboration.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12 mt-50'>
                <div className='list-icons'>
                  <div className='item-icon pl-0'>
                    <div className='mb-15'>
                      <img
                        src='/assets/imgs/page/homepage2/icon-active.svg'
                        alt='Agon'
                      />
                    </div>
                    <h4 className='text-heading-4'>
                      2. Pharma Innovation Connection
                    </h4>
                    <p className='text-body-text color-gray-600 mt-15'>
                      Deal Facilitation: We facilitate deals between
                      manufacturers and pharmaceutical innovators, connecting
                      cutting-edge products with production capabilities.
                      <br className='d-lg-block d-none' />
                      Market Entry Support: For pharma innovators, we expedite
                      market entry, breaking barriers to distribution and
                      connecting them with reliable manufacturers.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12 mt-50'>
                <div className='list-icons'>
                  <div className='item-icon pl-0'>
                    <div className='mb-15'>
                      <img
                        src='/assets/imgs/page/homepage2/icon-retent.svg'
                        alt='Agon'
                      />
                    </div>
                    <h4 className='text-heading-4'>
                      3. Distributor Opportunities
                    </h4>
                    <p className='text-body-text color-gray-600 mt-15'>
                      Data-Driven Opportunities: Distributors are presented with
                      data-driven opportunities based on manufacturer
                      capabilities and pharma innovator products.
                      <br className='d-lg-block d-none' />
                      Quotation Requests: Distributors can seamlessly request
                      and compare quotations for specific formulations,
                      streamlining the sourcing process and breaking barriers to
                      efficient procurement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='section-box overflow-visible mb-100'
          ref={newsletterSectionRef}
        >
          <div className='container mt-100'>
            <div className='row'>
              <div className='col-lg-10 mx-auto'>
                <div className='bg-2 box-newsletter position-relative'>
                  <div className='row align-items-center'>
                    <div className='col-lg-5 col-md-7'>
                      <span className='text-body-capitalized color-gray-500 text-uppercase'>
                        newsletter
                      </span>
                      {/* Remove the form and add the iframe */}
                      <iframe
                        className='iframe-newsletter'
                        title='Newsletter Subscription'
                        src='https://cdn.forms-content-1.sg-form.com/ca3d7a75-878c-11ee-b88c-46ca91b99978'
                        width='500'
                        height='700' // Adjust the height as needed
                      ></iframe>
                    </div>
                    <div className='col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end'>
                      <div className='block-chart shape-1'>
                        <img
                          src='/assets/imgs/page/homepage1/demo.png'
                          alt='Agon'
                        />
                      </div>
                      <img
                        className='img-responsive img-newsletter'
                        src='assets/imgs/template/img-newsletter.png'
                        alt='Agon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {modal ? (
          <section className='modal__bg' onClick={openModal}>
            <div className='modal__align'>
              <div className='modal__content' modal={modal}>
                <div className='modal__video-align'>
                  {videoLoading ? (
                    <div className='modal__spinner'>
                      <i className='fi-rr-refresh'></i>
                    </div>
                  ) : null}
                  <iframe
                    className='modal__video-style'
                    onLoad={spinner}
                    loading='lazy'
                    width='800'
                    height='500'
                    src='https://cdn.forms-content-1.sg-form.com/ca3d7a75-878c-11ee-b88c-46ca91b99978'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </Layout>
    </>
  );
}

export default Home;
