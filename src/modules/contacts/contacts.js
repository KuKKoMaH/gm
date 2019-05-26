import scriptLoader from '../../js/scriptLoader';
import mapStyles    from '../../js/mapStyles';

const $map = $(".contacts__map");
if ($map.length) {
  scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${window.MAP_API_KEY}`, () => {
    const el                     = $map[0];
    let { center, zoom, marker } = el.dataset;

    try {
      center = JSON.parse(center);
      zoom   = +zoom;

      const map = new google.maps.Map(el, {
        zoom:                     zoom,
        center:                   new google.maps.LatLng(center[0], center[1]),
        styles:                   mapStyles,
        mapTypeControl:           false,
        streetViewControl:        false,
        fullscreenControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
      });

      new google.maps.Marker({
        icon:     marker,
        position: new google.maps.LatLng(center[0], center[1]),
        map:      map,
      });
    } catch (e) {
      console.log(e);
    }
  });
}

