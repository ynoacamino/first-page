/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import './Slider.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const imgs = [
  {
    src: 'https://previews.dropbox.com/p/thumb/ABjryGey0lVABP4QEitfB1eYc_xH1sc4TY7HPCYf_gVJTIF7o8Srzd-2oUnM2xBwGNXR8z271Pwg97OXAxPSS1AgT8kfxWqPrZ_s3h8peyz0Qd7oJlUm5oovVbOdq2Sj-NBLTLYJ3MdshSeLXsF9yRYjQLfCnF0cCo33lFjmahsJ64p2R73bevLMIHbf8tulsylWdACbbPwiCl_xYxTVpaabbbaJwoiCqWAJsucLngUfWgAE9aIvMLy1gX3xFLCF_lR326YRAOBwdPzD2LxuEfjEf4tUR2FqvHasmsB7xFAAsRI5xJ7Hdqv-7Kgr5Ydd0hdyIVm5sk95VPiWUfbtMzhfmiajFPw9wrdRFIDYOJh2TJnwGFq1EZseKEgtgr8Y6Ug/p.png',
    alt: 'sliderImg',
    key: '1',
  },
  {
    src: 'https://previews.dropbox.com/p/thumb/ABjm9oAosKQlNiOnRgjVGZkMwv9hdS52ST6QyAe2ciwxrCthyr8FY3MKEq2AiPovdIHj79tcb2KeyILM7FBE97c7SIw8tBfc6STQcrTktC2_LgdupZZteVtBW1BzJ6-Rg_RyfXQLmL1qiDWDG5hpXpcqS4UWYzrJzKgiO-JmhRYUDtzlClfjXx3kxv970Wqnu0Azy0c74bJv6-X7w9Y93SGqioXzo5Scw94aZeY8m3LalsG15TTwTjQ_h0k72MfpZLdYLUfVA5hHdRvaj6CL5sBNQXt28MKYXaYlM17fFx5S1Vss1c-4EK24kiofSkDYM-P4sc_bVcIeGifv1fbaTVwZHspYLzJGgIuPiQftmUTe4eeFRmL8XDs3s-KlMWNRBSw/p.png',
    alt: 'sliderImg',
    key: '2',
  },
  {
    src: 'https://previews.dropbox.com/p/thumb/ABgrNoCaQtBfxLDyYo12EtOtEXfxKaNLKRhdR7-yRPBKomVC3p5U8B_HhVPXYDvUmuEMxn0SdbHiOCKvHpj1JBvDZDVNhI2nUFpMDfeJrUSvscV1UjXkVBCFUWd6Vwy-aUiTkBzlSwSJijGvT_3hojqdta86zKR3E7UZFezHFx_Ua5V9bDulEb7yLmSYiQEqK2QGc4dZsWAZcAq8ghcWQtXWlQJCOJ_MMZXawZ55s9cbOtkCjLZJDL5JMB_rr8qBGHUUhJI15-rB5Fud70uK7hG5jESgN1eTl_rGwxVfHDx0HQSrPhwvuroms8sbeQGl6srGfpDcsbGibVkTiJi8cxtMXpJ4j2vkJjnR3AAsqWFXdE2pVqLeiZ86Qb9Mv--JP8w/p.png',
    alt: 'sliderImg',
    key: '3',
  },
  {
    src: 'https://previews.dropbox.com/p/thumb/ABipEfS0ixzWbWiKWnbDXYeLBdEwpEHJC3Qddp4g8cWxe49Ss12vFNJ4_ESNhQ_gl-jAUrEpbCmG7tMQYuxrDGMFcESPjUsiACcVvtcQTCM5dfKF0G97TymFg7RimnK5gPPycfiuzfMF3lp9as_yyTd0ehVnKHRc48-FC5V40FPbqlH6uKnNTyWfaWnBanQwiZYXqgwNf_50m3rXb0Nyti1ZyYTvuUTCDnqRHMBShVnSPeQjQw60F_-eL5hchm8p6D9WFVCrK7GW_LdcVoZ1rjDzUlX9nRcM-kc3pkht_x_hS0w7QB1JgwvB73BHQc6d7grk-jRz5XGnmiWGD5A3mXEexTF-HjEH-QHGVlt-vjb2cosy5r7kgjRrBR-IZQCQ6Ow/p.png',
    alt: 'sliderImg',
    key: '4',
  },
];

function Slider() {
  const [viewImg, setViewImg] = useState(1);

  const next = () => {
    if (viewImg === imgs.length) setViewImg(1);
    else setViewImg(viewImg + 1);
  };

  const prev = () => {
    if (viewImg === 1) setViewImg(imgs.length);
    else setViewImg(viewImg - 1);
  };

  const changeImg = (num) => {
    setViewImg(Number(num));
  };

  return (
    <div className="Slider">
      {imgs.map((img) => {
        if (viewImg === Number(img.key)) {
          return (
            <div className="divImg" key={img.key}>
              <img className="imgSlider " src={img.src} alt={img.alt} />
            </div>
          );
        }
      })}
      <button type="button" className="prev arrowBtn pointer arrowBtnLeft" onClick={prev}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
      <button type="button" className="next arrowBtn pointer arrowBtnRigth" onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </button>
      <div className="elements">
        {imgs.map((img) => (
          <button
            type="button"
            key={img.key}
            className={`quadrate pointer ${viewImg === Number(img.key) && 'quadrateView'}`}
            onClick={() => changeImg(img.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
