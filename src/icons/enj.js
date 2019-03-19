const Enj = {
  symbol: 'enj',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.313-23c-3.022 0-6.043 0-9.052.006-.83.082-1.672.12-2.495.297-2.318.491-3.371 1.6-3.647 3.857-.047.353-.08.712-.119 1.071v3.636c.06.46.105.927.184 1.387.35 1.992 1.383 3 3.457 3.41.882.17 1.777.277 2.673.296 2.91.057 5.82.05 8.73 0 .697-.007 1.402-.057 2.073-.265.784-.24 1.133-1.172.685-1.84-.23-.347-.6-.397-.994-.397-3.101 0-6.195.006-9.296-.013-.889-.006-1.778-.057-2.64-.29-.777-.208-1.258-.674-1.455-1.424-.105-.403-.132-.813-.165-1.23-.04-.453-.046-.453.435-.453h12.99c.183 0 .374-.006.559-.038.44-.082.698-.308.724-.718.033-.51.178-1.065-.402-1.418a1.124 1.124 0 0 0-.573-.151H10.957c-.744 0-.744 0-.685-.713.132-1.518.724-2.142 2.298-2.388a8.84 8.84 0 0 1 1.422-.12c3.173-.013 6.353-.019 9.526-.025a5.12 5.12 0 0 0 .698-.05c.388-.064.632-.297.698-.675.164-.933-.152-1.393-1.12-1.576-.487-.088-.987-.12-1.48-.176z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#624dbf" r="16"/><path d="M22.313 9c.494.057.994.088 1.482.176.967.183 1.283.643 1.119 1.576-.066.378-.31.611-.698.674a5.12 5.12 0 0 1-.698.05c-3.173.007-6.353.013-9.526.026-.48 0-.955.044-1.422.12-1.574.246-2.166.87-2.298 2.388-.06.713-.06.713.685.713h13.028c.205.006.402.044.573.15.58.354.435.908.402 1.419-.026.41-.283.636-.724.718a3.341 3.341 0 0 1-.56.038h-12.99c-.48 0-.473 0-.434.454.033.416.06.826.165 1.229.197.75.678 1.216 1.455 1.424.862.233 1.751.284 2.64.29 3.1.019 6.195.013 9.296.013.395 0 .763.05.994.397.448.668.099 1.6-.685 1.84-.671.208-1.376.258-2.074.265-2.91.05-5.82.057-8.73 0a15.91 15.91 0 0 1-2.672-.296c-2.074-.41-3.108-1.418-3.457-3.41-.079-.46-.125-.926-.184-1.387v-3.636c.04-.36.072-.718.119-1.071.276-2.257 1.33-3.366 3.647-3.857.823-.177 1.665-.215 2.495-.297C16.27 9 19.29 9 22.313 9z" fill="#fff"/></g>`;
  }
};
export default Enj;