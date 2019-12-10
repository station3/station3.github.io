import React, { Component } from 'react'

const LatLng = {
  lat: 37.494335,
  lng: 127.014547,
}
const Controller = Wrapper => class extends Component {
  
  componentDidMount() {
    this.initMap()
  }
  
  initMap = () => {
    const { kakao } = window;
    const mapContainer = document.getElementById('map')
    const mapLatLng = new kakao.maps.LatLng(LatLng.lat, LatLng.lng)
    const mapOption = {
      center: mapLatLng,
      level: 2,
    }
    const marker = new kakao.maps.Marker({
      position: mapLatLng,
    })
    const control = new kakao.maps.ZoomControl()
    
    const map = new kakao.maps.Map(mapContainer, mapOption)
    marker.setMap(map)
    map.addControl(control, kakao.maps.ControlPosition.RIGHT)
    map.setZoomable(false)
  }
  
  render() {
    return (
      <Wrapper
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default Controller