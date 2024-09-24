import type { FC } from 'react';
import {
  BeautifulTimeline as Timeline,
  BeautifulTimelineItem as TimelineItem,
} from 'react-beautiful-timeline';
import dotIcon from '../../assets/dotIcon.svg?url';
import '../career/timeline.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="" style={{ margin: '10px' }}>
      <Timeline
        responsiveWidth={980}
        type="vertical"
        animation={true}
        passiveLineStyle={{
          background:
            'linear-gradient(180deg, rgba(226, 226, 226, 0.04) -12.5%, #DADADA 49.02%,  rgba(226, 226, 226, 0.04) 105.63%)',
        }}
        activeLineStyle={{
          background:
            'linear-gradient(180deg, rgba(131, 164, 249, 0.04) -12.5%, #A07FFD 49.02%, rgba(131, 164, 249, 0.04) 105.63%)',
        }}
      >
        <TimelineItem
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotText={<h1 className="timelineItemDotText">Aujourd'hui</h1>}
        >
          <div className="timelineItem">
            <h3>BTS SIO SLAM</h3>
            <p>
              Préparation du BTS SIO SLAM avec l'école STUDI.
            </p>
            <h3>Opticienne Manager</h3>
            <p>
              Manager du magasin Afflelou de Fréjus.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotText={<h1 className="timelineItemDotText">2019</h1>}
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotColor="none"
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          place="opposite"
        >
          <div className="timelineItem">
            <h3 className="timelineItemOpposite">Opticienne</h3>
            <p className="timelineItemOpposite ">
              Retour à l'optique en tant qu'opticienne chez Optic 2000 à Mandelieu la Napoule.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotText={<h1 className="timelineItemDotText">2017</h1>}
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
        >
          <div className="timelineItem">
            <h3>Transition</h3>
            <p>
              Période de transition destinée à mettre en oeuvre mon projet professionnel équestre.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotText={<h1 className="timelineItemDotText">2015</h1>}
          place="opposite"
        >
          <div className="timelineItem">
            <h3 className="timelineItemOpposite">Manager d'écurie</h3>
            <p className="timelineItemOpposite">
              Gestion d'un centre équestre / écurie de propriétaires : Les Ecuries Montagne et Soleil à La Côte d'Aime.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotText={<h1 className="timelineItemDotText">2013</h1>}
        >
          <div className="timelineItem">
            <h3>BPJEPS Equitation Option Activités Equestres</h3>
            <p>
             Préparation du BPJEPS Equitation Option Activités Equestres à l'ACF de St Ismier.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotText={<h1 className="timelineItemDotText">2012</h1>}
          place="opposite"
        >
          <div className="timelineItem">
            <h3 className="timelineItemOpposite">Opticienne</h3>
            <p className="timelineItemOpposite">
              Plusieurs postes d'opticienne diplômée tout d'abord à la Générale d'optique de Vigneux sur Seine puis chez Optique Sergent au sein des magasins de Moutiers et Bourg Saint Maurice.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotText={<h1 className="timelineItemDotText">2007</h1>}
        >
          <div className="timelineItem">
            <h3>BTS OL (Opticien Lunetier)</h3>
            <p>
             Préparation du BTS OL à L'ICO de Bures sur Yvette. Dernière année en alternance chez Optic 2000 à Brie Comte Robert.
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          dotIcon={<img src={dotIcon} alt="dotIcon" />}
          dotColor="none"
          dotStyle={{
            width: '16px',
            height: '16px',
            background: 'none',
          }}
          dotText={<h1 className="timelineItemDotText">2003</h1>}
          place="opposite"
        >
          <div className="timelineItem">
            <h3 className="timelineItemOpposite">BAC Général Série Scientifique</h3>
            <p className="timelineItemOpposite">
              Préparation du BAC Général Série Scientifique au lycée Guillaume Budé de Limeil Brévannes.
            </p>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
};