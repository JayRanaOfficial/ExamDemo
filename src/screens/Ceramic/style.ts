import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txtTitle: {
    // color: '#FFF',
    textTransform: 'uppercase',
  },
  txtItemTitle: {
    textAlign: 'center',
  },
  itemContainer: {
    marginRight: 10,
    marginTop: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
});
