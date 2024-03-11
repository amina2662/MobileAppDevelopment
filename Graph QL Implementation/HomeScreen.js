import { Text, FlatList, View } from 'react-native'

import { useQuery } from '@apollo/client';
import { CONTINENT_QUERY, LANGUAGE_QUERY, COUNTRY_QUERY } from './GraphQL';

export default function HomeScreen() {
    const { data, loading } = useQuery(CONTINENT_QUERY);
    console.log(data);

    const { data: data2, loading: loading2 } = useQuery(LANGUAGE_QUERY);
    console.log(data2);

    const { data: data3, loading: loading3 } = useQuery(COUNTRY_QUERY);
    console.log(data3);
}
  