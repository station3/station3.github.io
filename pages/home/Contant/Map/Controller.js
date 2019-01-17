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
    const mapContainer = document.getElementById('map')
    const mapLatLng = new daum.maps.LatLng(LatLng.lat, LatLng.lng)
    const mapOption = {
      center: mapLatLng,
      level: 2,
    }
    const marker = new daum.maps.Marker({
      position: mapLatLng,
    })
    const control = new daum.maps.ZoomControl()
    
    const map = new daum.maps.Map(mapContainer, mapOption)
    marker.setMap(map)
    map.addControl(control, daum.maps.ControlPosition.RIGHT)
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