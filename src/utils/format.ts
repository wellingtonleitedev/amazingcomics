import 'intl';
import 'intl/locale-data/jsonp/en-US';

export const formatValue = (value: number): string =>
  Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(
    value,
  );
