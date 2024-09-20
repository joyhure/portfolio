import React from 'react';
import { renderToString } from 'react-dom/server';
import Timeline from '../components/timeline.tsx';
import Title from '../../../components/atoms/Title.astro';

const CareerComp: React.FC = () => {
  const timelineHtml = renderToString(<Timeline />);

  return (
    <section id="career" className="career">
      <Title margin="1rem" contenu="Mon Parcours" />
      <div className="career__container">
        <div className="career__content">
          <div dangerouslySetInnerHTML={{ __html: timelineHtml }} />
        </div>
        <img
          className="about__img"
          src="/img/parcours.gif"
          alt="Image à propos Joy Huré"
        />
      </div>
    </section>
  );
};

export default CareerComp;