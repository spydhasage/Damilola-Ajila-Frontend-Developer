import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { Button, TextControl } from '@wordpress/components';
import { apiFetch } from '@wordpress/api-fetch';

const SpaceXBlockEdit = ({ attributes, setAttributes }) => {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    original_launch: '',
    type: ''
  });

  useEffect(() => {
    setLoading(true);
    setError(null);

    apiFetch({
      path: '/spacex-data/v1/rockets'
    }).then((response) => {
      setRockets(response);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      setError(err.message);
    });
  }, []);

  const updateFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };

  const filteredRockets = rockets.filter((rocket) => {
    return (!filters.status || rocket.status === filters.status) &&
      (!filters.original_launch || rocket.original_launch === filters.original_launch) &&
      (!filters.type || rocket.type === filters.type);
  });

  const renderRockets = () => {
    if (loading) {
      return <p>Loading Rockets...</p>;
    }

    if (error) {
      return <p>Error fetching Rockets: {error}</p>;
    }

    if (!filteredRockets.length) {
      return <p>No Rockets match the selected filters.</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Active</th>
            <th>Cost per Launch</th>
          </tr>
        </thead>
        <tbody>
          {filteredRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.name}</td>
              <td>{rocket.status}</td>
              <td>{rocket.active ? 'Yes' : 'No'}</td>
              <td>${rocket.cost_per_launch.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div {...useBlockProps()}>
      <h2>{__('SpaceX Rockets', 'spacex-data-block')}</h2>
      <div>
        <TextControl
          label={__('Status', 'spacex-data-block')}
          value={filters.status}
          onChange={(value) => updateFilter('status', value)}
        />
        <TextControl
          label={__('Original Launch', 'spacex-data-block')}
          value={filters.original_launch}
          onChange={(value) => updateFilter('original_launch', value)}
        />
        <TextControl
          label={__('Type', 'spacex-data-block')}
          value={filters.type}
          onChange={(value) => updateFilter('type', value)}
        />
        <Button isPrimary onClick={() => setFilters({
          status: '',
          original_launch: '',
          type: ''
        })}>{__('Clear Filters', 'spacex-data-block')}</Button>
      </div>
      <div>
        {renderRockets()}
      </div>
    </div>
  );
};

export default SpaceXBlockEdit;
