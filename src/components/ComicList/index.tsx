import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useIndicators} from '../../hooks/indicators';
import api from '../../services/api';
import {formatValue} from '../../utils/format';
import Loading from '../Loading';
import {
  Container,
  HeaderTitle,
  ComicContainer,
  ComicDescription,
  ComicImage,
  ComicTitle,
  Icon,
  Prices,
  Span,
  Info,
} from './styles';

interface ComicListProps {
  characterId?: number;
  withPagination?: boolean;
}

export interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  pageCount: number;
  prices: Array<{
    type: 'printPrice' | 'digitalPurchasePrice';
    price: number;
  }>;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const ComicList: React.FC<ComicListProps> = ({characterId}) => {
  const [comics, setComics] = useState<Comic[]>([]);
  const {setLoading, setModal} = useIndicators();

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setLoading(true);
        const characterQuery = characterId ? `&characters=${characterId}` : '';
        const {data: response} = await api.get(
          `/comics?orderBy=-focDate${characterQuery}`,
        );

        setComics(response.data.results);
      } catch (error) {
        setModal({
          open: true,
          title: 'Request failed',
          message: 'Comics not found',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, [characterId, setLoading, setModal]);

  return (
    <Container testID="comic-container">
      <FlatList
        testID="comic-list"
        keyExtractor={(item, index) => `${item.id}-${index}`}
        data={comics}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderTitle>New Comics</HeaderTitle>}
        ListEmptyComponent={<Loading />}
        renderItem={({item}) => (
          <ComicContainer>
            <ComicImage
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }}
            />
            <ComicDescription>
              <ComicTitle>{item.title}</ComicTitle>
              <Info>
                <Icon name="alert-triangle" size={20} color="red" />
                <Text>Issues: </Text>
                <Span>{item.issueNumber}</Span>
              </Info>
              <Info>
                <Icon name="book-open" size={20} />
                <Text>Page count: </Text>
                <Span>{item.pageCount}</Span>
              </Info>
              <Prices>
                {item.prices.map(price => (
                  <Info key={`${item.id}-${price.type}`}>
                    <Icon
                      name={price.type === 'printPrice' ? 'book' : 'smartphone'}
                      size={20}
                      color="grey"
                    />
                    <Text>
                      {price.type === 'printPrice'
                        ? 'Printed Comic'
                        : 'Digital Comic'}
                      :{' '}
                    </Text>
                    <Span>{formatValue(price.price)}</Span>
                  </Info>
                ))}
              </Prices>
            </ComicDescription>
          </ComicContainer>
        )}
      />
    </Container>
  );
};

export default React.memo(ComicList);
