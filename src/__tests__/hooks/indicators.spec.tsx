import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {IndicatorsProvider, useIndicators} from '../../hooks/indicators';

describe('Characters Hooks', () => {
  it('should be able to set loading true', () => {
    const {result} = renderHook(() => useIndicators(), {
      wrapper: IndicatorsProvider,
    });

    act(() => result.current.setLoading(true));

    expect(result.current.loading).toBeTruthy();
  });

  it('should be able to set modal open', async () => {
    const {result} = renderHook(() => useIndicators(), {
      wrapper: IndicatorsProvider,
    });

    const setModal = result.current.setModal;
    act(() => setModal({open: true}));

    waitFor(() => expect(setModal).toHaveBeenCalledWith({open: true}));
  });
});
