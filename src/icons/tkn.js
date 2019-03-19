const Tkn = {
  symbol: 'tkn',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM13.092 7.913h-.037v12.74c0 5.737 7.12 6.098 9.725 4.583l-1.064-3.176c-1.175.613-4.294.397-4.294-1.444v-6.063H23v-3.5h-5.541L17.495 6l-4.403 1.913zm-4.11 7.578c1.094 0 1.981-1.066 1.981-2.381 0-1.316-.887-2.382-1.981-2.382C7.887 10.728 7 11.794 7 13.11c0 1.315.887 2.381 1.982 2.381z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#24DD7B"/><path fill="#FFF" d="M13.092 7.913L17.495 6l-.036 5.053H23v3.5h-5.578v6.063c0 1.84 3.12 2.057 4.294 1.444l1.064 3.176c-2.606 1.515-9.725 1.154-9.725-4.584V7.912h.037zm-4.11 7.578C7.887 15.491 7 14.425 7 13.11c0-1.316.887-2.382 1.982-2.382 1.094 0 1.981 1.066 1.981 2.382 0 1.315-.887 2.381-1.981 2.381z"/></g>`;
  }
};
export default Tkn;