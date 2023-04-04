const Spacehbit = {
  symbol: 'spacehbit',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle fill="#0971FE" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M15.775 4.548c-.434.074-.413.065-1.441.676-.631.375-1 .59-1.016.59a.509.509 0 00-.102.06c-.048.035-.246.155-.44.27a210.336 210.336 0 01-1.366.804c-.239.14-.774.454-1.19.7l-1.076.63C8.588 8.6 6.9 9.604 6.794 9.677c-.284.196-.652.757-.703 1.07-.013.08-.038.155-.057.167-.052.034-.041 10.068.011 10.218l.118.334c.136.388.46.784.8.98.086.049.424.247.751.441a459.356 459.356 0 001.848 1.09c.035.02.115.07.177.108.062.04.148.09.193.112.044.023.252.145.46.271.38.23.46.277.793.465.097.055.321.186.498.292a615.434 615.434 0 012.956 1.742c1.13.668 1.6.696 2.523.153a1952.432 1952.432 0 002.538-1.495c1.13-.663 1.832-1.078 2.507-1.48a108.81 108.81 0 011.147-.674l.353-.206c1.805-1.037 1.976-1.18 2.217-1.862l.076-.212-.001-5.182-.001-5.183-.074-.216c-.18-.53-.47-.845-1.114-1.218-.239-.138-.897-.524-1.463-.857a3973.85 3973.85 0 01-3.63-2.141c-1.16-.686-1.608-.95-1.752-1.032-.302-.174-.98-.582-.996-.6-.06-.068-.836-.285-.935-.26l-.26.046m.83 2.883c.196.067 1.889 1.047 5.426 3.142 1.015.601 1.148.714 1.41 1.194.223.411.216.272.205 4.323l-.009 3.645-.072.204a2.214 2.214 0 01-.49.8c-.177.178-.283.246-1.452.932-.182.107-.553.326-.823.488-.271.162-.5.286-.51.277-.009-.01-.02-2.123-.024-4.696l-.007-4.678-.069-.192c-.199-.558-.347-.694-1.501-1.375l-.932-.55-.016 1.88-.016 1.88h-3.342l-.008-3.342-.008-3.342.397-.232c.818-.479 1.248-.563 1.841-.358m-4.744 6.822c0 4.772 0 4.815.13 5.093.19.411.392.594 1.123 1.012.185.106.402.233.482.282.22.138.73.426.751.426.01 0 .023-.832.028-1.849l.008-1.849 1.68-.009 1.678-.008-.008 3.31-.008 3.31-.466.274c-1.02.599-1.45.586-2.572-.075l-1.156-.679a102.49 102.49 0 01-1.317-.782l-.618-.365a49.191 49.191 0 00-.837-.49 30.804 30.804 0 01-.746-.44 64.895 64.895 0 00-.434-.26c-.648-.38-.93-.719-1.09-1.305-.09-.336-.104-7.271-.015-7.635.12-.489.414-.921.8-1.176.394-.261 2.475-1.474 2.53-1.475.055-.002.057.228.057 4.69" fill="#FFF"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.034 4.502l-.26.046c-.433.074-.412.065-1.44.676-.631.375-1 .59-1.016.59a.303.303 0 00-.067.037l-.035.024c-.048.034-.246.154-.44.269l-.127.074-.277.163-.24.142-.722.425c-.239.14-.774.454-1.19.7l-1.076.63C8.588 8.6 6.9 9.604 6.794 9.677c-.284.196-.652.757-.703 1.07-.013.08-.038.155-.057.167-.02.013-.03 1.53-.033 3.39v1.83c.003 2.48.018 4.924.044 4.998l.051.145.067.189c.136.388.46.784.8.98.086.049.424.247.751.441a459.356 459.356 0 001.848 1.09c.035.02.115.07.177.108.062.04.148.09.193.112.044.023.252.145.46.271.38.23.46.277.793.465.097.055.321.186.498.292l.181.107a433.672 433.672 0 012.089 1.229l.346.205.34.2c1.13.669 1.6.697 2.523.154a1952.432 1952.432 0 002.538-1.495c1.13-.663 1.832-1.078 2.507-1.48l.24-.142a80.343 80.343 0 01.907-.532l.353-.206c1.805-1.037 1.976-1.18 2.217-1.862l.076-.212-.002-10.365-.074-.216c-.18-.53-.47-.845-1.114-1.218-.239-.138-.897-.524-1.463-.857l-.536-.316-3.095-1.825a249.27 249.27 0 00-1.751-1.032c-.302-.174-.98-.582-.996-.6-.06-.068-.836-.285-.935-.26zm-4.227 5.06c.034.032.045.225.05 1.357l.001.278.001.484.001 3.713v1.154c.004 2.165.02 2.51.092 2.71l.014.036.023.052c.19.411.393.594 1.124 1.012.185.106.402.233.482.282.22.138.73.426.751.426.01 0 .023-.832.028-1.849l.008-1.849 1.68-.009 1.678-.008-.008 3.31-.008 3.31-.466.274c-1.02.599-1.45.586-2.572-.075l-1.156-.679a102.489 102.489 0 01-1.317-.782l-.618-.365a49.192 49.192 0 00-.837-.49 30.804 30.804 0 01-.746-.44 64.896 64.896 0 00-.434-.26c-.648-.38-.93-.719-1.09-1.305-.09-.336-.104-7.271-.015-7.635.12-.489.414-.921.8-1.176.394-.261 2.475-1.474 2.53-1.475h.004zm4.797-2.131c.196.067 1.889 1.047 5.426 3.142 1.015.601 1.148.714 1.41 1.194l.044.082.026.05c.11.223.137.452.14 1.946v.751l-.005 1.494-.009 3.645-.072.204a2.214 2.214 0 01-.49.8c-.177.178-.283.246-1.452.932-.182.107-.553.326-.823.488-.271.162-.5.286-.51.277-.009-.01-.02-2.123-.024-4.696l-.007-4.678-.069-.192c-.199-.558-.347-.694-1.501-1.375l-.932-.55-.016 1.88-.016 1.88h-3.342l-.008-3.342-.008-3.342.397-.232c.818-.479 1.248-.563 1.841-.358z"/>`;
  }
};
export default Spacehbit;