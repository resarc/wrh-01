const GoogleMap = ({
  url 
}: {
  url: string
}) => 
  <div className="google-map w-full">
    <iframe src={url} width="100%" height="400" style={{ border:0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

export default GoogleMap
